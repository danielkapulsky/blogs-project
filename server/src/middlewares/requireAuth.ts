import { Request, Response, NextFunction } from "express";
import { IJWTPayload, UserRole } from "../interfaces/users";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
    userId: string
    role: UserRole
}

export const requireAuth = async (req:AuthenticatedRequest,res:Response,next:NextFunction) => {
        const {authorization} = req.headers;
        
        if(!authorization) return res.status(401).json({message:"Authorization token required"});
        const token = authorization.split(" ")[1];

    try {
        const {userId, role} = jwt.verify(token, process.env.JWT_SECRET) as IJWTPayload;
        req.userId = userId;
        req.role = role;
        
        next();
    } catch (error) {
        res.status(401).json({message:"Request not authorized"})
    }
}