import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";
import UserSchema from "../models/UserSchema";

export default async function getCampaigns(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.body;
  try {
    const user = await UserSchema.findById(userId);

    if (!user) {
      return next(new Error("User not found!"));
    }

    const campaigns = await BloodDonationCampaignSchema.find({
      userId: userId,
    }).populate("userId");

    res.status(200).json({ campaigns });
  } catch (error) {
    next(error);
  }
}
