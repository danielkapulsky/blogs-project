import mongoose from "mongoose";
import { IUserEntity } from "../interfaces/users";

const userShema = new mongoose.Schema<IUserEntity>({
    username: {type: String,required:true, unique:true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required:true},
    image:{type:String,required:true},
    role:{type: String, required:false, default:"basic"}
},{timestamps: true});

export const  User = mongoose.model("User", userShema);

