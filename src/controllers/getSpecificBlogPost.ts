import blogPostSchema from "../models/blogPostSchema";
import { Request, Response, NextFunction } from "express";

export default async function getBlogPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  try {
    const blogPost = await blogPostSchema.findById(id);
    if (!blogPost) {
      res.status(200).json({ message: "blog post not found" });
    }
    res.status(200).json({
      blogPost,
    });
  } catch (error) {
    next(error);
  }
}
