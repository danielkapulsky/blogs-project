export interface IBlogForm {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  catagory: string;
  userId: string;
}

export interface IBlogEntity extends IBlogForm {
  likes: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
