import Stripe from "stripe";
import { config } from "../config";
import { Request, Response, NextFunction } from "express";
import DonateAmount from "../models/DonateAmount";

const stripe = new Stripe(config.stripe_scret);

export default async function stripePayment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { token, amount, name } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "USD",
    payment_method_data: {
      type: "card",
      card: {
        token,
      },
    },
    confirmation_method: "manual",
    confirm: true,
    return_url: "http://test.com", // this URL is for testing purposes
  });

  const donateAmount = new DonateAmount({
    amount: amount,
    name: name,
  });

  const donate = await donateAmount.save();
  
  res.json({
    message: "Payment successful",
    donate,
  });
}
