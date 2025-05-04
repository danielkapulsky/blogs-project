import { Blog } from "../models/blogs";
import { IBlogForm } from "../interfaces/blogs";

export class blogService {
    static async createBlog(BlogData:IBlogForm) {
        const newBlog = await Blog.create(BlogData);
        return {newBlog};
    }
    static async getAllBlogs(){
        const allBlogs = await Blog.find();
        return allBlogs
    }
    static async getAllBlogsById(id: string) {
        const allBlogs = await Blog.find({userId: id});
        return allBlogs
    }
    static async getBlogById(id: string){
        const blog = await Blog.findOne({_id:id})
        return blog;
    }
    static async deleteBlogById(id: string){
        const blog = await Blog.findByIdAndDelete({_id: id});
        return blog;
    }
    static async editBlogById(id: string, data:IBlogForm){
        const blog = await Blog.findByIdAndUpdate({_id: id}, data);
        return blog;
    }
    static async toggleById(id: string, data:any){
        const blog = await Blog.findByIdAndUpdate({_id: id}, data);
        return blog;
    }
}