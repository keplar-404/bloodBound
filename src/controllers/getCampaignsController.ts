import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function getCampaigns(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const campaigns = await BloodDonationCampaignSchema.find();

    res.status(200).json({ campaigns });
  } catch (error) {
    next(error);
  }
}
