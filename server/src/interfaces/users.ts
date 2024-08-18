export interface IUserForm{
    username: string
    email: string
    password: string
    image:string
    role?:UserRole
}
export interface IUserEntity extends IUserForm{
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserRole = "admin" | "basic"