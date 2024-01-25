import DonorsSchema from "../models/DonorsSchema";
import { Request, Response, NextFunction } from "express";

export default async function createDonor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userName, email, phone, lastTimeDonate, bloodGroup } = req.body;

  const donorName = userName.toLowerCase().trim();
  const donorEmail = email.toLowerCase().trim();
  const donorPhone = phone.trim();

  try {
    const currentDate = new Date();
    let donatable = false;

    // Check if has 3 months gap between last time donate and current time
    if (
      lastTimeDonate &&
      currentDate.getTime() - new Date(lastTimeDonate).getTime() >=
        1000 * 60 * 60 * 24 * 30 * 3
    ) {
      donatable = true;
    }

    const donor = new DonorsSchema({
      userName: donorName,
      email: donorEmail,
      phone: donorPhone,
      isDonatable: donatable,
      lastTimeDonate: lastTimeDonate,
      bloodGroup: bloodGroup,
    });

    const donorData = await donor.save();

    res
      .status(201)
      .json({ donor: donorData, message: "Donor created successfully!" });
  } catch (error) {
    next(error);
  }
}
