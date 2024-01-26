import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function createBloodRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId, patientName, bloodGroup, time, location, phone, bloodLiter } =
    req.body;

  try {
    // Find the user by userId
    const user = await UserSchema.findById(userId);

    if (!user) {
      return next(new Error("User not found"));
    }

    // Create a new blood donation request
    const bloodRequest = {
      patientName,
      bloodGroup,
      time,
      location,
      phone,
      bloodLiter,
    };

    // Add the new blood donation request to the user's profile
    user.reqBlood.push(bloodRequest);

    // Save the updated user profile with the new blood donation request
    const updatedUser = await user.save();

    res.status(201).json({
      user: updatedUser,
      message: "Blood donation request created successfully!",
    });
  } catch (error) {
    next(error);
  }
}
