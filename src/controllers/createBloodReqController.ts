import { Request, Response, NextFunction } from "express";
import UserSchema from "../models/UserSchema";

export default async function createBloodRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { patientName, bloodGroup, time, location, phone, bloodBag, email } =
    req.body;

  try {
    const user = await UserSchema.findOneAndUpdate(
      { email: email },
      {
        $push: {
          bloodReq: {
            patientName,
            bloodGroup,
            time,
            location,
            phone,
            bloodBag,
          },
        },
      },
      { new: true }
    );

    if (!user) {
      return next(new Error("User not found"));
    }

    res.status(201).json({
      message: "sucessfully created blood request",
      bloodRequest: user,
    });
  } catch (error) {
    next(error);
  }
}
