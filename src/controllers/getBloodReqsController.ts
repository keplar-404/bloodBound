import BloodReqSchema from "../models/BloodReqSchema";
import { Request, Response, NextFunction } from "express";
import UserSchema from "../models/UserSchema";
export default async function getBloodRequests(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Retrieve all data using find method
    const users = await UserSchema.find({ bloodReq: { $exists: true } });
    let bloodRequests = await users.map((user) => { return user.bloodReq})[0]


// console.log(bloodRequests)

    // Sort data by time
    bloodRequests.sort((a, b) => {
      // Check if a and b have valid time properties before comparing
      if (a && b && a.time && b.time) {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      }
      return 0;
    });

    // Transform time to human-readable format
    const bloodRequestsTransformed = bloodRequests.map((data) => {
      // Check if data.time is defined and not null
      if (data.time !== undefined && data.time !== null) {
        const dateString: string = data.time.toString();
        const dateObject = new Date(dateString);

        // Options for formatting the date, adjust as needed
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };

        // Convert to human-readable date
        const humanReadableDate = dateObject.toLocaleDateString(
          "en-US",
          options
        );

        // Return the transformed data
        return {
          ...data.toObject(), // Convert Mongoose document to plain object
          time: humanReadableDate,
        };
      }

      return null; // Handle the case where time is undefined or null
    }).filter((data) => data !== null); // Remove null values from the array

    res.status(200).json({
      message: "sucessfully retrieved blood requests",
      bloodRequests: bloodRequestsTransformed,
    });
  } catch (err) {
    next(err);
  }
}
