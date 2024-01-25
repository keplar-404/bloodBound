import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function getCampaign(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  try {
    const campaign = await BloodDonationCampaignSchema.findById(id);

    if (!campaign) {
      return next(new Error("Campaign not found"));
    }

    res.status(200).json({ campaign });
  } catch (error) {
    next(error);
  }
}
