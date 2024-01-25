import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import UserSchema from "../models/UserSchema";
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
    division,
    district,
    subDistrict,
    userId,
  } = req.body;

  try {
    const exitsingCampaign = await BloodDonationCampaignSchema.findOne({
      title: title,
    });

    if (exitsingCampaign) {
      return next(new Error("Campaign title already exists"));
    }

    // create campaign
    const campaign = new BloodDonationCampaignSchema({
      title,
      description,
      startDate,
      endDate,
      division,
      district,
      subDistrict,
      userId,
    });

    const campaignData = await campaign.save();

    // update user
    await UserSchema.findByIdAndUpdate(
      userId,
      { $push: { campaigns: campaignData._id } },
      { new: true }
    );

    res.status(201).json({
      campaign: campaignData,
      message: "Campaign created successfully!",
    });
  } catch (error) {
    next(error);
  }
}
