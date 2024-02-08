import mongoose from "mongoose";

const services = new mongoose.Schema({
  testName: String,
  testDescription: String,
  testPrice: String,
  imageUrl: String,
});
