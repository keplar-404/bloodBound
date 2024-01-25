import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  reqBlood: [
    {
      patientName: String,
      bloodGroup: String,
      time: Date,
      location: String,
      phone: Number,
      bloodLiter: Number,
    },
  ],
  campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
});

export default mongoose.model("User", UserSchema);
