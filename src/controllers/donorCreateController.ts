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

  const currentDate = new Date();
  let donatable = false;
  // Check if has 3 months gap between last time donate and current time
  if (
    lastDonationDate &&
    currentDate.getTime() - new Date(lastDonationDate).getTime() >=
      1000 * 60 * 60 * 24 * 30 * 3
  ) {
    donatable = true;
  }

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
            isDonatable: donatable,
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
