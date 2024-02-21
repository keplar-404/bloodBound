import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function createCampaign(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    title,
    description,
    photo,
    startDate,
    endDate,
    division,
    district,
    subDistrict,
    email,
  } = req.body;
  try {
    // create new campaing
    const campaign = new BloodDonationCampaignSchema({
      title,
      description,
      photo,
      startDate,
      endDate,
      division,
      district,
      subDistrict,
    });

    // update user 
    await UserSchema.findByIdAndUpdate(
      { email: email },
      { $push: { campagins: campaign._id } },
      { new: true }
    );

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
