import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { userModel } from "./userModel";
import bcrypt from "bcrypt";
import { config } from "../config/config";
import { sign } from "jsonwebtoken";
import { InterfaceOfUser } from "./userTypes";
const createUser= async (req: Request, res: Response, next: NextFunction)=>{
    
    // const {name, email, password}=req.body;
    const name = req.body.name?.toLowerCase().trim();
    const email = req.body.email?.toLowerCase().trim();
    const password = req.body.password?.trim();


    // validation

    // if name email password is not present
    if(!name || !email || !password){
        const error=createHttpError(400,"All fields are required")
        return next(error);
    }
    try {
    const user= await userModel.findOne({email: email});

    // if user is already registered
    if(user){
        const error= createHttpError(400,"User is already registered");
        return next(error);
    }
        
    } catch (error) {
        return next(createHttpError(500,"Error while getting the user"));
    }
    
    // password hash
    const hashedPassword= await bcrypt.hash(password,10);
    let newUser: InterfaceOfUser;
    try {
    // create user in database
      newUser= await userModel.create({
        name: name,
        email: email,
        password: hashedPassword
    })
        
    } catch (error) {
        return next(createHttpError(500,"Error while creating the user"));
    }
    
    try {
    // JWT Token generation
    const token= sign({
        sub:newUser._id,   
    }, config.jwt_secret as string,{
        expiresIn:"7d",
    })

    // Response
    res.status(201).json({ accessToken: token });

    } catch (error) {
        return next(createHttpError(500,"Error while generating the token"));
    }

}
export  {createUser};