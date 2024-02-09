import mongoose from "mongoose";
const testBooking = new mongoose.Schema({
  testName: String,
  userName: String,
  userEmail: String,
  date: String,
  time: String,
  phone: String,
  address: String,
  status: String,
  price: String,
  imageUrl: String,
});

export default mongoose.model("TestBooking", testBooking);
