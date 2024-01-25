import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function updateCampaign(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    id,
    title,
    description,
    startDate,
    endDate,
    division,
    district,
    subDistrict,
  } = req.body;

  try {
    let campaign = await BloodDonationCampaignSchema.findById(id);
    const exitsingTitle = await BloodDonationCampaignSchema.findOne({
      title: title,
    });

    if (!campaign) {
      return next(new Error("Campaign not found"));
    } else if (exitsingTitle) {
      return next(new Error("Title already exists"));
    }

    campaign.title = title;
    campaign.description = description;
    campaign.startDate = startDate;
    campaign.endDate = endDate;
    campaign.division = division,
    campaign.district = district,
    campaign.subDistrict = subDistrict,
    campaign = await campaign.save();

    res.status(200).json({
      message: "Campaign updated successfully!",
      campaign: campaign,
    });
  } catch (error) {
    next(error);
  }
}
