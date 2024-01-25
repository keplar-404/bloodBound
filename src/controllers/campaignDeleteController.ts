import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function campaignDelete(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id, userId } = req.body;

  try {
    const campaign = await BloodDonationCampaignSchema.findByIdAndDelete(id);

    if (!campaign) {
      return next(new Error("Campaign not found"));
    }

    await UserSchema.findByIdAndUpdate(
      userId,
      { $pull: { campaigns: id } },
      { new: true }
    );

    res.status(200).json({ message: "Campaign deleted successfully!" });
  } catch (error) {
    next(error);
  }
}
