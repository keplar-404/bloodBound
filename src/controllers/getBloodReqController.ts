import BloodReqSchema from "../models/BloodReqSchema";
import { Request, Response, NextFunction } from "express";

export default async function getBloodRequests(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const bloodRequests = await BloodReqSchema.find();

    res.status(200).json({
      bloodRequests
    });
  } catch (err) {
    next(err);
  }
}