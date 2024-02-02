import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function userCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, photo } = req.body;

  try {
    const user = new UserSchema({
      name,
      email,
      photo,
    });

    const userData = await user.save();
    res
      .status(201)
      .json({ user: userData, message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
}
