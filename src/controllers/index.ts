import { home } from "./homeController";
import userCreate from "./userCreateController";
import createDonor from "./donorCreateController";
import getDonors from "./getDonarsController";
import createBloodRequest from "./createBloodReqController";
import stripePayment from "./stripeController";
import getBloodRequests from "./getBloodReqsController";
import createCampaign from "./createDonationCampaign";
import getAllCampaigns from "./getAllCampaigns";
import getBioMedicalServices from "./getBioMedicalServices";
import getUser from "./getUserController";
const allControllers = {
  home,

  // user
  userCreate,
  getUser,

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

  // bio madical
  getBioMedicalServices
};

export default allControllers;
