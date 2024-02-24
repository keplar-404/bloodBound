import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function clcDonationAmountAndCampaingsLength(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const campagins = await BloodDonationCampaignSchema.find().select(
      "donationAmount"
    );
    let totalDonationAmount = 0;

    for (let i = 0; i < campagins.length; i++) {
      const currentCampaing = campagins[i];
      for (let j = 0; j < currentCampaing.donationAmount.length; j++) {
        // @ts-ignore
        totalDonationAmount += currentCampaing.donationAmount[j].amount;
      }
    }

    // console.log(campagins.length)
    res
      .status(200)
      .json({ totalDonation: totalDonationAmount, campaign: campagins.length });
  } catch (error) {
    next(error);
  }
}
