//in here wants to find all the users from the database

import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import {hash} from 'bcrypt';


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
        const hashedPassword = await hash(password,10);
        const user= new User({name,email,password:hashedPassword}); //new instance of user will create 
        await user.save(); 
        return res.status(201).json({message:"OK", id: user._id.toString() });

    }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR", cause:error.message})
    }
};