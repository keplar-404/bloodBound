import mongoose from "mongoose";

const BloodReqSchema = new mongoose.Schema({
  patientName: String,
  bloodGroup: String,
  time: Date,
  location: String,
  phone: String,
  bloodBag: String,
});

export default mongoose.model("BloodRequest", BloodReqSchema);
