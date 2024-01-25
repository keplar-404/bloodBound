import mongoose from "mongoose";

const BloodDonationCampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  division: String,
  district: String,
  subDistrict: String,
  goal: Number,
  donors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donor" }],
});

export default mongoose.model("Campaign", BloodDonationCampaignSchema);
