import TestBookingSchema from "../models/TestBookingSchema";
import { Request, Response, NextFunction } from "express";

export default async function getTestBookings(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const getTestBookings = await TestBookingSchema.find();
    res.status(200).json({
      data: getTestBookings,
    });
  } catch (error) {
    next(error);
  }
}
