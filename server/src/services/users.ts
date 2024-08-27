import { IUserForm } from "../interfaces/users";
import { User } from "../models/users";


export class userService {
    static async createUser(userData:IUserForm) {
        const newUser = await User.create({...userData});
        return {newUser};
    }
    static async getAllUser(){
        // const allBlogs = await Blog.find();
        // return {allBlogs}
    }
    static async getUserById(id: string){
        // const blog = await Blog.findOne({_id:id})
        // return blog;
    }
    static async deleteUserById(id: string){
        // const blog = await Blog.findByIdAndDelete({_id: id});
        // return blog;
    }
    static async editUserById(id: string, data:IUserForm){
        // const blog = await Blog.findByIdAndUpdate({_id: id}, data);
        // return blog;
    }
    static async getUserByUsername(username: string){
        const user = await User.findOne({username})
        return user;
    }
    static async getUserByEmail(email: string){
        const user = await User.findOne({email});
        return user;
    }
}