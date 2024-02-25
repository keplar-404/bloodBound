import UserSchema from "../models/UserSchema";
import { Request, Response, NextFunction } from "express";

export default async function getBloodReqsOfUser(
    req: Request,
    res: Response,
    next: NextFunction
){
    const email  = req.params.email;
    try {
        const user = await UserSchema.findOne({ email: email });
        if (!user) {
            return next(new Error("User not found"));
        }
        res.status(200).json({
            message: "Blood requests found successfully",
            data: user.bloodReq,
        });
    } catch (error) {
        next(error);
    }
}