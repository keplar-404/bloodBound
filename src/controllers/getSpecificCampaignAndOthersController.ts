import BloodDonationCampaignSchema from "../models/BloodDonationCampaignSchema";
import { Request, Response, NextFunction } from "express";

export default async function getSpecificCampaignAndOthers(
    req: Request,
    res: Response,
    next: NextFunction
){
    const { campaginId } = req.body;
    try {
        const campaign = await BloodDonationCampaignSchema.findById(campaginId)
        const others = await BloodDonationCampaignSchema.find({ _id: { $ne: campaginId } })
        res.status(200).json({ campaign: campaign, others: others })
    } catch (error) {
        next(error);
    }
}