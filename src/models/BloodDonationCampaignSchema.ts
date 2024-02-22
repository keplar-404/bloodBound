import mongoose from "mongoose";

const BloodDonationCampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  endDate: {
    type: String,
    require: true,
  },
  division: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  subDistrict: {
    type: String,
    require: true,
  },
  donationAmount: [
    {
      amount: Number,
      email: String,
    },
  ],
  volunteer: [
    {
      name: String,
      phone: String,
      email: String,
      address: String,
    },
  ],
});

export default mongoose.model("campaigns", BloodDonationCampaignSchema);
