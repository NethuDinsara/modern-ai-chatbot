//in here wants to find all the users from the database

import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import {hash,compare} from 'bcrypt';
import { createToken } from "../utils/token-manager.js";


export const getAllUsers = async(
    req:Request,
    res:Response,
    next:NextFunction
) => {
    //finding all users
    try{
        const users= await User.find(); //find from mongoose.model it will find all users
        return res.status(200).json({message:"OK",users});

    }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR", cause:error.message})
    }
};

export const userSigUp = async(
    req:Request,
    res:Response,
    next:NextFunction
) => {
    //user sign up
    try{

        const {name,email,password} =req.body;
        //checking for already exists or not ?
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(401).send("User already registered");
        
        const hashedPassword = await hash(password,10);
        const user= new User({name,email,password:hashedPassword}); //new instance of user will create 
        await user.save(); 
        return res.status(201).json({message:"OK", id: user._id.toString() });

    }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR", cause:error.message})
    }
};

export const userLogin = async(
    req:Request,
    res:Response,
    next:NextFunction
) => {
    //user login
    try{

        const {email,password} =req.body;
        //finding user by email
        const user= await User.findOne({email});
        if(!user){
            return res.status(401).send("User not registered");
        }
        //password validation matching 
        //uusing comparing in bycrypt
        const isPasswordCorrect = await compare(password,user.password);
        // above compares the original pw and the user entered pw then returns a bool value
        if(!isPasswordCorrect){
            return res.status(403).send("Incorrect Password");
        }

        //token is inside this string
        const token = createToken(user._id.toString(),user.email,"7d");

        
        // if its corect
        return res.status(200).json({message:"OK",id: user._id.toString() });
       
    }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR", cause:error.message})
    }
};