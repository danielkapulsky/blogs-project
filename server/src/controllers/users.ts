import { Request,Response } from "express";
import bcrypt from "bcrypt";
import { userService } from "../services/users";
import { generateToken } from "../utils/jwt";

export const signUp = async (req:Request, res:Response) => {
    const {username, email} = req.body;

    try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const userByUsername = await userService.getUserByUsername(username);
        const userByEmail = await userService.getUserByEmail(email);
        if(userByUsername || userByEmail) return res.status(400).json({message:"user already exist"});
        
        const user = await userService.createUser({...req.body, password:hashedPassword});
        res.status(201).json({message:"User created successfully", user})
    } catch (error) {
        res.status(400).json({message:error});
    }
}


export const logIn = async(req:Request,res:Response) => {
    const {username, password} = req.body;

    try {
        const userByUsername = await userService.getUserByUsername(username);
        if(!userByUsername) return res.status(404).json({message:"User is not exist"});
        
        const isMatch = await bcrypt.compare(password, userByUsername.password);
        if(!isMatch) return res.status(404).json({message:"Password Incorrect"});
        
        const token =  generateToken({userId: userByUsername._id, role: "basic"});

        res.status(200).json({message:"user logged in successfully", token})

    } catch (error) {
    res.status(400).json({message:error})        
    }
}


export const getAll = async(req, res) => {
    try{    
        const allUsers = await userService.getAllUser();

        res.status(200).json({message:"all user operated successfully", allUsers})
    }catch(error){
        res.status(400).json({message:error})   
    }

}


export const getUserById = async(req, res) => {

    const {id} = req.params;

    try{    
        const userById = await userService.getUserById(id);

        res.status(200).json({message:"all user operated successfully", userById})
    }catch(error){
        res.status(400).json({message:error})   
    }
 
}


export const editUserById = async(req ,res) => {
    
    const {id} = req.params;
    const {password} = req.body;

    try{
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        await userService.editUserById(id, {...req.body, password:hashedPassword});

        res.status(200).json({message:"edit user successfully"})
    }catch(error){
        res.status(400).json({message:error})   
    }

}


export const deleteUserById = async(req, res) => {

    const {id} = req.params;

    try{    
        const deleteById = await userService.deleteUserById(id);

        res.status(200).json({message:"delete user successfully", deleteById})
    }catch(error){
        res.status(400).json({message:error})   
    }
}