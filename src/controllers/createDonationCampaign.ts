import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function createCampaign(
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
    await campaign.save();
    res.status(201).json({
      message: "Campaign created successfully",
      campaign,
    });
  } catch (error) {
    next(error);
  }
}
