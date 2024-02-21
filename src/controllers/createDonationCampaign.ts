import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function createCampaign(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, photo, startDate, endDate, address } = req.body;
  try {
    // create new campaing
    const campaign = new BloodDonationCampaignSchema({
      title,
      description,
      photo,
      startDate,
      endDate,
      address,
    });

    // save campaign
    const campagindata = await campaign.save();

    res.status(201).json({
      message: "sucessfully created campaign",
      campaign: campagindata,
    });
  } catch (error) {
    next(error);
  }
}
