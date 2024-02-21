import Stripe from "stripe";
import { config } from "../config";
import { Request, Response, NextFunction } from "express";
import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import UserSchema from "../models/UserSchema";

const stripe = new Stripe(config.stripe_scret);

export default async function stripePayment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { token, amount, campaignId, email } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "USD",
      payment_method_data: {
        // @ts-ignore
        type: "card",
        card: {
          token,
        },
      },
      confirmation_method: "manual",
      confirm: true,
      return_url: "http://test.com", // this URL is for testing purposes
    });

    const donate = await BloodDonationCampaignSchema.findOneAndUpdate(
      { _id: campaignId },
      {
        $push: {
          donationAmount: {
            amount: amount,
            email: email,
          },
        },
      },
      { new: true }
    );

    const user = await UserSchema.findOneAndUpdate(
      { email: email },
      { $push: { donoteAmount: { amount: amount, campaignId: campaignId } } },
      { new: true }
    );

    res.json({
      message: "Payment successful",
      donate: donate,
      user: user,
    });
  } catch (error) {
    next(error);
  }
}
