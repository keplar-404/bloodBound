import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function volunteerDelete(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { campaignId, email } = req.body;
  try {
    let campaign = await BloodDonationCampaignSchema.findById(campaignId);
    if (!campaign) {
      return next(new Error("Campaign not found"));
    }
    const volunteer = campaign.volunteer.filter(
      (volunteer) => volunteer.email === email
    );
    if (!volunteer) {
      return next(new Error("Volunteer not found"));
    }
    // @ts-ignore
    campaign.volunteer = campaign.volunteer.filter(
      (volunteer) => volunteer.email !== email
    );
    await campaign.save();
    res.status(200).json({
      message: "volunteer deleted successfully",
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
}
