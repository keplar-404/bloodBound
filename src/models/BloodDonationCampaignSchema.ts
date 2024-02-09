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
  location: {
    type: String,
    require: true,
  },
  time: {
    type: Date,
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
      volunteerId: String,
      photo: String,
    },
  ],
});

export default mongoose.model("Campaign", BloodDonationCampaignSchema);
