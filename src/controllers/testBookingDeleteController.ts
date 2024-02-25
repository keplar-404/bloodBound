import TestBookingSchema from "../models/TestBookingSchema";
import { Request, Response, NextFunction } from "express";

export default async function testBookingDelete(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  try {
    const testBooking = await TestBookingSchema.findById(id);
    if (!testBooking) {
      return next(new Error("Test booking not found"));
    }
    await TestBookingSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "test booking deleted successfully" });
  } catch (error) {
    next(error);
  }
}
