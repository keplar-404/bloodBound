import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function getAllCampaigns(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const campaigns = await BloodDonationCampaignSchema.find();

    res.status(200).json({
      campaigns,
    });
  } catch (err) {
    next(err);
  }
}
