import express from "express";
import { createBlog, deleteBlogById, editBlogById, getAllBlogs, getBlogById } from "../controllers/blogs";
import { blogValidation } from "../validations/blogs";

export const blogsRouter = express.Router();

blogsRouter.get("/", getAllBlogs);
blogsRouter.get("/:id", getBlogById);
blogsRouter.post("/"/* ,blogValidation */ ,createBlog );
blogsRouter.delete("/:id", deleteBlogById);
blogsRouter.put("/:id", editBlogById);
blogsRouter.patch("/", (req,res) => res.json({message:"patch success"}));
