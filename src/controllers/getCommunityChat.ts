import { Request, Response, NextFunction } from "express";
import communityChat from "../models/communityChat";
export default async function getCommunityChat(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Retrieve all data using find method
    const chat = await communityChat.find();

    
    res.status(200).json({
     chat,
    });
  } catch (err) {
    next(err);
  }
}