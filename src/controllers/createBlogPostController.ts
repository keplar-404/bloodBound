import blogPostSchema from "../models/blogPostSchema";
import { Request, Response, NextFunction } from "express";

export default async function blogPostCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, photo } = req.body;
  try {
    const blogPost = new blogPostSchema({
      title: title,
      description: description,
      photo: photo,
    });
    await blogPost.save();
    res
      .status(201)
      .json({ message: "blog post created successfully", blogPost });
  } catch (error) {
    next(error);
  }
}
