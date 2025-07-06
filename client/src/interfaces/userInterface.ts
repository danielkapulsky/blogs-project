export interface IUserAuth {
  username: string
  password: string
}

export interface IUserForm extends IUserAuth {
  email: string;
  image: string;
  role?: UserRole;
}
export interface IUserEntity extends IUserForm {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserRole = "admin" | "basic";

export interface IUsersResponse {
  message: string;
  data: IUserEntity[];
}


export interface IError {
  username: string 
  email: string 
  password: string 
  image: string 
}

export interface UserPayload {
  _id: string
  role: UserRole
}