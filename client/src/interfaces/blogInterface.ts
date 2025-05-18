export interface IBlogForm {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  catagory: string;
  userId?: string;
}

export interface IBlogEntity extends IBlogForm {
  _id: string;
  likes: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBlogResponse {
  message: string;
  data: IBlogEntity;
}

export interface IBlogsResponse {
  message: string;
  data: IBlogEntity[];
}

export interface IBlogError {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  catagory: string;
}
