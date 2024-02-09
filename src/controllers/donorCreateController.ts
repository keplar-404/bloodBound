import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function createDonor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    email,
    phone,
    bloodGroup,
    district,
    upazila,
    address,
    lastDonationDate,
  } = req.body;

  try {
    const user = await UserSchema.findOneAndUpdate(
      { email: email },
      {
        $set: {
          donor: {
            phone,
            bloodGroup,
            district,
            upazila,
            address,
            lastDonationDate,
          },
        },
      },
      { new: true }
    );

    if (!user) {
      return next(new Error("User not found"));
    }
    res.status(201).json({ user: user, message: "Donor created successfully!" });
  } catch (error) {
    next(error);
  }
}
