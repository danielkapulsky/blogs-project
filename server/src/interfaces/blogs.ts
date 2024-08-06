export interface IBlogForm {
  title: string;
  subtitle: string;
  text: string;
  img: string;
}

export interface IBlogEntity {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  likes: string[];
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
