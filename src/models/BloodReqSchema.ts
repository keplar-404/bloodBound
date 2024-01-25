import mongoose from "mongoose";

const BloodReqSchema = new mongoose.Schema({
  patientName: String,
  bloodGroup: String,
  time: Date,
  location: String,
  phone: Number,
  bloodBag: Number,
});

export default mongoose.model("BloodRequest", BloodReqSchema);
