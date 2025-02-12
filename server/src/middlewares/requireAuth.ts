import { Request, Response, NextFunction } from "express";
import { IJWTPayload, UserRole } from "../interfaces/users";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
    userId: string
    role: UserRole
}

export const requireAuth = async (req:AuthenticatedRequest,res:Response,next:NextFunction) => {
        const token = req.cookies.authToken;
        if(!token) return res.status(401).json({message:"Authorization token required"});

    try {
        const {_id, role} = jwt.verify(token, process.env.JWT_SECRET) as IJWTPayload;
        req.userId = _id;
        req.role = role;
        
        next();
    } catch (error) {
        res.status(401).json({message:"Request not authorized"})
    }
}