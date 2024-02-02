import { Request, Response, NextFunction } from "express";
import BloodReqSchema from "../models/BloodReqSchema";

export default async function createBloodRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { patientName, bloodGroup, time, location, phone, bloodBag } = req.body;

  try {
    const bloodRequest = new BloodReqSchema({
      patientName,
      bloodGroup,
      time,
      location,
      phone,
      bloodBag,
    });

    const bloodReqData = await bloodRequest.save();

    res.status(201).json({
      message: "sucessfully created blood request",
      bloodRequest: bloodReqData,
    });
  } catch (error) {
    next(error);
  }
}
