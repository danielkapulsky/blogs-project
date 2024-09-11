import express from "express";
import { createBlog, deleteBlogById, editBlogById, getAllBlogs, getBlogById } from "../controllers/blogs";
import { blogValidation } from "../validations/blogs";
import { requireAuth } from "../middlewares/requireAuth";

export const blogsRouter = express.Router();

blogsRouter.get("/", getAllBlogs);
blogsRouter.get("/:id",requireAuth, getBlogById);
blogsRouter.post("/",requireAuth,blogValidation ,createBlog );
blogsRouter.delete("/:id",requireAuth, deleteBlogById);
blogsRouter.put("/:id", editBlogById);
blogsRouter.patch("/", (req,res) => res.json({message:"patch success"}));
