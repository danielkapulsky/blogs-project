import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subtitle:{type: String, required:true},
    text: {type: String, required: true},
    img: {type: String, required: true},
    likes: [{type: String}],
    // userId: {type: String, required:true},
},{timestamps:true});

export const Blog = mongoose.model("Blog",blogSchema)