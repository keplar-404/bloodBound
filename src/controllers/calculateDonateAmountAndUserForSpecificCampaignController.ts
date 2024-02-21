import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function calculateDonateAmountAndUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { campaginId } = req.body;
  try {
    const campaign = await BloodDonationCampaignSchema.findById(campaginId);

    if (!campaign?.donationAmount[0]?.amount) {
      return res.status(200).json({ message: "donation amount not found" });
    }
    const donateAmount = campaign?.donationAmount
      .map((item) => item.amount)
      // @ts-ignore
      .reduce((prev, next) => prev + next, 0);
    const userAmount = campaign?.donationAmount.length;
    res
      .status(200)
      .json({ donateAmount: donateAmount, userAmount: userAmount });
  } catch (error) {
    next(error);
  }
}
