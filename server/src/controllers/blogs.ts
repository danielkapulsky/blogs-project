import { Request,Response } from "express";
import { IBlogForm } from "../interfaces/blogs";
import { blogService } from "../services/blogs";
import { validationResult } from 'express-validator';
import { AuthenticatedRequest } from "../middlewares/requireAuth";

export const createBlog = async (req:AuthenticatedRequest,res:Response) => {
    const {title,subtitle,text,img, catagory} = req.body as IBlogForm;
    const userId = req.userId;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {newBlog} = await blogService.createBlog({title,subtitle,text,img, catagory, userId});
        res.status(201).json({message:"new blog created successfully", data: {newBlog}});
    } catch (error) {
        res.status(400).json({message:error.message});
    };
};

export const getAllBlogs = async (req: Request, res: Response) => {
    try{
        const {allBlogs} = await blogService.getAllBlogs();
        res.status(200).json({message: "got all blogs successfuly", data: {allBlogs}})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const getBlogById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
        const blog = await blogService.getBlogById(id);
        if(!blog) return res.status(404).json({message: "blog not found"})
        res.status(200).json({message: "blog recieved successfuly", data: blog})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const deleteBlogById = async (req: AuthenticatedRequest, res: Response) => {
    const {id} = req.params;
    const userId = req.userId;
    const role = req.role;

    try{
        const blog = await blogService.getBlogById(id);
        // if(blog.id !== userId) return res.status(401).json({"unauthorized"});

        const deletedBlog = await blogService.deleteBlogById(id);
        if (!deletedBlog) return res.status(404).json({message: "blog not found"});
        const blogs = await blogService.getAllBlogs();
        res.status(200).json({message: "blog deleted succefully" , data: {blogs , deletedBlog}})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}

export const editBlogById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
        const updatedBlog = await blogService.editBlogById(id, req.body);
        if(!updatedBlog) return res.status(401).json({message:"blog not found"});

        const blogs = await blogService.getAllBlogs();
        res.status(200).json({message: "blog deleted succefully" , data: {blogs , updatedBlog}})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}