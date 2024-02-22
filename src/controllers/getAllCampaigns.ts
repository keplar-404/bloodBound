import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";
import { dateFormat } from "../utils/helper";

export default async function getAllCampaigns(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let campaigns = await BloodDonationCampaignSchema.find();

    if (campaigns.length !== 0) {
      for (let i of campaigns) {
        // @ts-ignore
        const startDate = dateFormat(i.startDate);
        // @ts-ignore
        const endDate = dateFormat(i.endDate);

        i.startDate = startDate;
        i.endDate = endDate;
      }
    }

    res
      .status(200)
      .json({ campaigns: campaigns, message: "campaigns found successfully!" });
  } catch (error) {
    next(error);
  }
}
