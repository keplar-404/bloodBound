import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function userCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, photo } = req.body;

  const isUserExist = await UserSchema.findOne({ email: email });

  if (isUserExist) {
    res.status(200).json({
      message: "user already exist",
      user: isUserExist,
    });
    return;
  }

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
