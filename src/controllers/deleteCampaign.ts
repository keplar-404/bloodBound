import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function campaignDelete(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  try {
    await BloodDonationCampaignSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "campaign deleted successfully" });
  } catch (error) {
    next(error);
  }
}
