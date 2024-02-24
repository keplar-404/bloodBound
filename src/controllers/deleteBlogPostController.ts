import blogPostSchema from "../models/blogPostSchema";
import { Request, Response, NextFunction } from "express";

export default async function deleteBlogPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  try {
    const blogPost = await blogPostSchema.findByIdAndDelete(id);
    if (!blogPost) {
      return next(new Error("blog post not found"));
    }
    res.status(200).json({
      message: "blog post deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
