import { IUserForm } from "../interfaces/users";
import { User } from "../models/users";


export class userService {
    static async createUser(userData:IUserForm) {
        const newUser = await User.create({...userData});
        return {newUser};
    }
    static async getAllUser(){
        const alluser = await User.find();
        return alluser
    }
    static async getUserById(id: string){
        const user = await User.findOne({_id:id})
        return user;
    }
    static async deleteUserById(id: string){
        const user = await User.findByIdAndDelete({_id: id});
        return user;
    }
    static async editUserById(id: string, data:IUserForm){
        const user = await User.findByIdAndUpdate({_id: id}, data);
        return user;
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