import { ObjectId } from "mongodb"

export type ProductType = {
  _id?: ObjectId;
  name: string;
  slug: string;
  description?: string;
  excerpt?: string;
  price?: number;
  tags?: string[];
  thumbnail?: string;
  image?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserType = {
  _id: ObjectId;
  name?: string;
  username: string;
  email: string;
  password: string;
}

export type Wishlist = {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}