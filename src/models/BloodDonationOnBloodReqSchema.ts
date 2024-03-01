import mongoose from "mongoose";

const BloodDonationOnBloodReqSchema = new mongoose.Schema({
  bloodreqId: String,
  date: String,
  bloodBag: Number,
  email: String,
});

export default mongoose.model(
  "BloodDonationOnBloodReq",
  BloodDonationOnBloodReqSchema
);
