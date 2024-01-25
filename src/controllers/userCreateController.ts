import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";
export default async function userCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, email, phone } = req.body;

  const userName = username.toLowerCase().trim();
  const userEmail = email.toLowerCase().trim();

  try {
    const user = new UserSchema({
      username: userName,
      email: userEmail,
      phone: phone,
    });

    const userData = await user.save();
    res
      .status(201)
      .json({ user: userData, message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
}
