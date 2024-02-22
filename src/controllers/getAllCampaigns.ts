import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function getAllCampaigns(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let campaigns = await BloodDonationCampaignSchema.find();
    // @ts-ignore
    campaigns = campaigns.sort((a, b)=> new Date(a.startDate)- new Date(b.startDate))
    res
      .status(200)
      .json({ campaigns: campaigns, message: "campaigns found successfully!" });
  } catch (error) {
    next(error);
  }
}
