import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function getDonors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await UserSchema.find({ donor: { $exists: true } });
    let donors: any[] = [];
    
    const currentDate = new Date();

    users.forEach((user) => {
      if (user.donor) {
        if (
          user.donor.lastDonationDate &&
          currentDate.getTime() -
            new Date(user.donor.lastDonationDate).getTime() >=
            1000 * 60 * 60 * 24 * 30 * 3
        ) {
          donors.push(user);
        }
      }
    });

    res
      .status(200)
      .json({ donors: donors, message: "donors found successfully!" });
  } catch (error) {
    next(error);
  }
}
