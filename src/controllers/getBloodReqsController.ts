import { Request, Response, NextFunction } from "express";
import UserSchema from "../models/UserSchema";
export default async function getBloodRequests(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Retrieve all data using find method
    const users = await UserSchema.find();

    let userBloodReq = await users.filter((user) => user?.bloodReq[0]);

    let bloodReq = userBloodReq.map((user) => user.bloodReq);

    res.status(200).json({
      bloodRequests: bloodReq,
    });
  } catch (err) {
    next(err);
  }
}
