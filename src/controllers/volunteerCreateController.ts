import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function volunteerCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { campaingId, name, email, phone, address } = req.body;

  try {
    const campaign = await BloodDonationCampaignSchema.findById(campaingId);
    const user = await UserSchema.findOne({ email: email });

    if (!user) {
      return res.status(200).json({ message: "User not found" });
    } else if (!campaign) {
      return res.status(200).json({ message: "Campaing not found" });
    }

    await BloodDonationCampaignSchema.findByIdAndUpdate(
      campaingId,
      {
        $push: {
          volunteer: {
            name: name,
            phone: phone,
            email: email,
            address: address,
          },
        },
      },
      { new: true }
    );

    await UserSchema.findOneAndUpdate(
      { email: email },
      {
        $push: {
          volunteer: {
            campaingId: campaingId,
            phone: phone,
            address: address,
          },
        },
      },
      { new: true }
    );
  } catch (error) {
    next(error);
  }
}
