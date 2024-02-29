import { Request, Response, NextFunction } from "express";
import UserSchema from "../models/UserSchema";
import { dateFormat2 } from "../utils/helper";
export default async function getBloodRequests(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Retrieve all data using find method
    const users = await UserSchema.find();

    let userBloodReq = await users.filter((user) => user?.bloodReq[0]);

    let bloodreqs: any = [];

    userBloodReq.forEach((user) => {
      const email = user.email;

      user.bloodReq.forEach((bloodReq) => {
        if (bloodReq.time) {
          const {
            patientName,
            bloodGroup,
            time,
            location,
            phone,
            bloodBag,
            _id,
          } = bloodReq;

          const date = dateFormat2(time);

          const newBloodreq = {
            patientName: patientName,
            bloodGroup: bloodGroup,
            time: date,
            location: location,
            phone: phone,
            bloodBag: bloodBag,
            _id: _id,
            email: email,
          };

          // console.log(newBloodreq);

          bloodreqs.push(newBloodreq);
        }
      });
    });

    res.status(200).json({
      bloodRequests: bloodreqs,
    });
  } catch (err) {
    next(err);
  }
}
