import TestBookingSchema from "../models/TestBookingSchema";
import { Request, Response, NextFunction } from "express";

export default async function testBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    testName,
    userName,
    userEmail,
    date,
    time,
    phone,
    address,
    status,
    price,
    imageUrl,
  } = req.body;

  try {
    const newTestBooking = new TestBookingSchema({
      testName,
      userName,
      userEmail,
      date,
      time,
      phone,
      address,
      status,
      price,
      imageUrl,
    });

    res.status(201).json({
      message: "Test Booking created successfully",
      data: newTestBooking,
    });
  } catch (error) {
    next(error);
  }
}
