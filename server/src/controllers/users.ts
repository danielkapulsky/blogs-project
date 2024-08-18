import { Request,Response } from "express";
import { User } from "../models/users";
import bcrypt from "bcrypt";
import { userService } from "../services/users";

export const signUp = async (req:Request, res:Response) => {
    const {username,email,password, image} = req.body;

    try {
        const salt = 10;
        const hashedPassword = bcrypt.hash(req.body.password, salt);
        const userByUsername = await userService.getUserByUsername(username);
        if(userByUsername) return res.status(400).json({message:"user already exist"});


        
    } catch (error) {
        
    }
}


export const logIn = async(req:Request,res:Response) => {

}


export const getAll = async(req, res) => {

}


export const getUserById = async(req, res) => {

}


export const editUserById = async(req ,res) => {

}


export const deleteUserById = async(req, res) => {

}