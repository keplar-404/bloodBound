import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
  testName: String,
  testDescription: String,
  testPrice: String,
  imageUrl: String,
});

export default mongoose.model("Services", servicesSchema);
