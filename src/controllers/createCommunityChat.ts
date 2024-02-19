import { Request, Response, NextFunction } from "express";
import communityChat from "../models/communityChat";


export default async function createCommunityChat(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { time, user, message } = req.body;

 try {
    const chat = new communityChat({
        time,
        user,
        message,
    });

    await chat.save();
    res
      .status(201)
      .json({message: "message added successfully!" });
  } catch (error) {
    next(error);
  }
}