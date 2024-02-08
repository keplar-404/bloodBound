import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function createDonationCampaign(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, photo, location, time } = req.body;

  try {
    const campaign = new BloodDonationCampaignSchema({
      title,
      description,
      photo,
      location,
      time,
    });
    const newCampaign = await campaign.save();
    res.status(201).json({
      message: "Campaign created successfully",
      campaign: newCampaign,
    });
  } catch (error) {
    next(error);
  }
}
