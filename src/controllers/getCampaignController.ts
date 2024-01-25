import { Request, Response, NextFunction } from "express";
import UserSchema from "../models/UserSchema";

export default async function getCampaign(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id, userId } = req.body;

  try {
    const user = await UserSchema.findById(userId);

    if (!user) {
      return next(new Error("User not found"));
    }

    // Find the campaign within the user's campaigns array
    const campaign = user.campaigns.find((campaign) => campaign.equals(id));

    if (!campaign) {
      return next(new Error("Campaign not found"));
    }

    res.status(200).json({ campaign });
  } catch (error) {
    next(error);
  }
}
