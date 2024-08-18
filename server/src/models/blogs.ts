import mongoose from "mongoose";
import { IBlogEntity } from "../interfaces/blogs";

const blogSchema = new mongoose.Schema<IBlogEntity>({
    title: {type: String, required: true},
    subtitle:{type: String, required:true},
    text: {type: String, required: true},
    img: {type: String, required: true},
    likes: [{type: String}],
    catagory: {type: String, required: true},
    // userId: {type: String, required:true},
},{timestamps:true});

export const Blog = mongoose.model("Blog",blogSchema)