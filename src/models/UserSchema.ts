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
    isDonatable: Boolean,
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
});

export default mongoose.model("User", UserSchema);
