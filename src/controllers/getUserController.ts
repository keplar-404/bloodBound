import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function getUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;
  try {
    const user = await UserSchema.findOne({ email: email });
    if (!user) {
      return next(new Error("User not found"));
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
}
