export interface IBlogForm {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  catagory: string;
}

export interface IBlogEntity extends IBlogForm {
  likes: string[];
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
