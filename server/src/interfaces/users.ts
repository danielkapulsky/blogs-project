export interface IUserForm{
    username: string
    email: string
    password: string
    image:string
    role?:UserRole
}
export interface IUserEntity extends IUserForm{
    _id: string
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserRole = "admin" | "basic"

export interface IJWTPayload {
    _id:string
    role: UserRole
}