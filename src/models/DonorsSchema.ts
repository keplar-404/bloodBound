import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
  userName: String,
  email: String,
  bloodGroup: String,
  lastTimeDonate: Date,
  isDonatable: Boolean,
  phone: Number,
  campaignsDonatedTo: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  ],
});

export default mongoose.model("Donor", DonorSchema);
