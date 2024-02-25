import TestBookingSchema from "../models/TestBookingSchema";
import { Request, Response, NextFunction } from "express";

export default async function statusChangeForTestBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    let testBooking = await TestBookingSchema.findById(id);
    if (!testBooking) {
      return next(new Error("Test booking not found"));
    }

    testBooking.status = "Confirm";
    await testBooking.save();
    res.status(200).json({
      message: "Status changed successfully",
      data: testBooking,
    });
  } catch (error) {
    next(error);
  }
}
