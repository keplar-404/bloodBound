import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function userUpdate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, email, phone, id } = req.body;

  const userName = username.toLowerCase().trim();
  const userEmail = email.toLowerCase().trim();

  try {
    const user = await UserSchema.findById(id);
    const existingUserName = await UserSchema.findOne({ username: userName });
    const existingUserEmail = await UserSchema.findOne({ email: userEmail });

    if (existingUserName) {
      return next(new Error("Username already exists"));
    } else if (existingUserEmail) {
      return next(new Error("Email already exists"));
    }
    if (!user) {
      return next(new Error("User not found!"));
    }

    user.username = userName;
    user.email = userEmail;
    user.phone = phone;
    await user.save();

    res.status(200).json({ message: "User updated successfully!", user: user });
  } catch (error) {
    next(error);
  }
}
