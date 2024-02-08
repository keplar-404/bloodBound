import bioMedicalServices from "../models/bioMedicalServicesSchema";
import { Request, Response, NextFunction } from "express";

export default async function getBioMedicalServices(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const services = await bioMedicalServices.find();
    res.status(200).json({ services });
  } catch (error) {
    next(error);
  }
}
