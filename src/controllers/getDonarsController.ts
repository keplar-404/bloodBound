import DonorsSchema from "../models/DonorsSchema";
import { Request, Response, NextFunction } from "express";

export default async function getDonors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const donors = await DonorsSchema.find();

    res.status(200).json({
      donors,
    });
  } catch (error) {
    next(error);
  }
}
