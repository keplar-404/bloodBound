import blogPostSchema from "../models/blogPostSchema";
import { Request, Response, NextFunction } from "express";

export default async function getAllBlogPosts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const blogPosts = await blogPostSchema.find();
    res.status(200).json({
      blogPosts,
    });
  } catch (error) {
    next(error);
  }
}
