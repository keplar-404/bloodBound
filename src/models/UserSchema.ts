import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
  donor: {
    phone: String,
    bloodGroup: String,
    district: String,
    upazila: String,
    address: String,
    lastDonationDate: Date,
  },
  donoteAmount: [
    {
      amount: Number,
      campaignId: String,
    },
  ],
  bloodBagDonated: [
    {
      campaignId: String,
      bloodBag: String,
    },
  ],

  bloodReq: [
    {
      patientName: String,
      bloodGroup: String,
      time: Date,
      location: String,
      phone: String,
      bloodBag: String,
    },
  ],
  campagins: [String],
  volunteer: [
    {
      campaingId: String,
      phone: String,
      address: String,
    },
  ],
});

export default mongoose.model("User", UserSchema);
