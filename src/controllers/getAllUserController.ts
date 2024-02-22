import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await UserSchema.find();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
}
