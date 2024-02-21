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
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
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
  locaion: {
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
      phone: Number,
      email: String,
      photo: String,
    },
  ],
});

export default mongoose.model("Campaign", BloodDonationCampaignSchema);
