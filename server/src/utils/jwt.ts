import jwt from "jsonwebtoken";
import { IJWTPayload } from "../interfaces/users";
import dotenv from "dotenv";

dotenv.config();

const EXPIRE_TIME = "24h";
const secret = process.env.JWT_TOKEN;

export const generateToken = (payload: IJWTPayload) => {
  if (!secret) throw new Error("JWT Secret is not defined");

  return jwt.sign(payload, secret, {expiresIn:EXPIRE_TIME});
};