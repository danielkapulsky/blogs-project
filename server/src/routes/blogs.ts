import express from "express";
import { createBlog, deleteBlogById, editBlogById, getAllBlogs, getBlogById } from "../controllers/blogs";

export const blogsRouter = express.Router();

blogsRouter.get("/", getAllBlogs);
blogsRouter.get("/:id", getBlogById);
blogsRouter.post("/", createBlog );
blogsRouter.delete("/:id", deleteBlogById);
blogsRouter.put("/:id", editBlogById);
blogsRouter.patch("/", (req,res) => res.json({message:"patch success"}));
