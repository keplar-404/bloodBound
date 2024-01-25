import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function campaignCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    title,
    description,
    startDate,
    endDate,
    location,
    goal,
    division,
    district,
    subDistrict,
  } = req.body;

  try {
    const exitsingCampaign = await BloodDonationCampaignSchema.findOne({
      title: title,
    });

    if (exitsingCampaign) {
      return next(new Error("Campaign title already exists"));
    }

    const campaign = new BloodDonationCampaignSchema({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      location: location,
      goal: goal,
      division,
      district,
      subDistrict,
    });

    const campaignData = await campaign.save();

    res.status(201).json({
      campaign: campaignData,
      message: "Campaign created successfully!",
    });
  } catch (error) {
    next(error);
  }
}
