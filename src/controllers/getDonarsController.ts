import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function getDonors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await UserSchema.find({ donor: { $exists: true } });

    res
      .status(200)
      .json({ donors: users, message: "donors found successfully!" });
  } catch (error) {
    next(error);
  }
}
