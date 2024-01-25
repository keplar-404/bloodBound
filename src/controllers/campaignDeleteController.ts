import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function campaignDelete(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  try {
    const campaign = await BloodDonationCampaignSchema.findByIdAndDelete(id);

    if (!campaign) {
      return next(new Error("Campaign not found"));
    }

    res.status(200).json({ message: "Campaign deleted successfully!" });
  } catch (error) {
    next(error);
  }
}
