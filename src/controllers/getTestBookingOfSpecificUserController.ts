import TestBookingSchema from "../models/TestBookingSchema";
import { Request, Response, NextFunction } from "express";

export default async function getTestBookingOfSpecificUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const email  = req.params.email;
  try {
    const testBookings = await TestBookingSchema.find({ userEmail: email });
    if (!testBookings || testBookings.length == 0) {
      return next(new Error("User not booked any test"));
    }

    res.status(200).json({
      message: "Test Bookings found successfully",
      data: testBookings,
    });
  } catch (error) {
    next(error);
  }
}
