//in here wants to find all the users from the database

import { Request, Response, NextFunction } from "express";
import User from "../models/User.js"

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
}