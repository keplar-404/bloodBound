import mongoose from "mongoose";

const DonateAmount = new mongoose.Schema({
  amount: Number,
  name: String,
});

export default mongoose.model("Donateamount", DonateAmount);