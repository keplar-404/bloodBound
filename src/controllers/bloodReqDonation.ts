import BloodDonationOnBloodReqSchema from "../models/BloodDonationOnBloodReqSchema";
import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function bloodReqDonation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, username, bloodreqId, bloodBag, date } = req.body;

  try {
    // Find the user document
    let user = await UserSchema.findOne({ email: email });

    // Find the specific blood request in the user document
    const bloodReq = await UserSchema.findOne({ "bloodReq._id": bloodreqId });

    if (!user) {
      return res.status(404).json({
        message: "User does not exist",
      });
    }

    if (!user?.donor?.lastDonationDate) {
      return res.status(400).json({
        message: "User did not register as a donor",
      });
    }

    if (!bloodReq) {
      return next(new Error("Blood request not found"));
    }

    const bloodBagConvertToNumber = Number(
      bloodReq.bloodReq.filter((bloodReq) => bloodReq._id == bloodreqId)[0]
        .bloodBag
    );
    const clcBloodBag = bloodBagConvertToNumber - bloodBag;

    if (clcBloodBag < 0) {
      return next(
        new Error("You cannot donate more blood than the patient needs")
      );
    }

    const bloodBagConvertToStr = String(clcBloodBag);
    bloodReq.bloodReq.filter(
      (bloodReq) => bloodReq._id == bloodreqId
    )[0].bloodBag = bloodBagConvertToStr;
    // const updatedBloodReq = bloodReq.bloodReq[0];

    // Update user document
    await UserSchema.findOneAndUpdate(
      { email: email },
      {
        $push: {
          bloodReqDonation: {
            bloodreqId: bloodreqId,
            bloodBag: bloodBag,
            date: date,
            donorName: email,
            donorEmail: username,
          },
        },
        $set: {
          "donor.lastDonationDate": new Date(date), // Convert date string to Date object
        },
      },
      { new: true } // To return the modified document
    );

    // Save the changes to the specific blood request
    await bloodReq.save();

    res.status(200).json({
      message: "Successfully Blood donated",
      bloodReq: bloodReq.bloodReq.filter(
        (bloodReq) => bloodReq._id == bloodreqId
      )[0],
      donor: user.donor,
    });
  } catch (error) {
    next(error);
  }
}
