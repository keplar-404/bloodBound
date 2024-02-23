import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function userDelete(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;

  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      res.status(200).json({ message: "user not found" });
    }
    await UserSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
}
