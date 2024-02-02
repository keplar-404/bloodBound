import { home } from "./homeController";
import userCreate from "./userCreateController";
import createDonor from "./donorCreateController";
import getDonors from "./getDonarsController";
import createBloodRequest from "./createBloodReqController";
import stripePayment from "./stripeController";
import getBloodRequests from "./getBloodReqsController";
import createCampaign from "./createDonationCampaign";
import getAllCampaigns from "./getAllCampaigns";
const allControllers = {
  home,

  // user
  userCreate,

  // blood request
  createBloodRequest,
  getBloodRequests,

  // campaign
  createCampaign,
  getAllCampaigns,

  // donor
  createDonor,
  getDonors,

  // payment
  stripePayment,
};

export default allControllers;
