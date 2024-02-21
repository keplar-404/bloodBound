import { home } from "./homeController";
import userCreate from "./userCreateController";
import createDonor from "./donorCreateController";
import getDonors from "./getDonarsController";
import createBloodRequest from "./createBloodReqController";
import stripePayment from "./stripeController";
import getBloodRequests from "./getBloodReqsController";
import createCampaign from "./createDonationCampaign";
import getAllCampaigns from "./getAllCampaigns";
import getSpecificCampaignAndOthers from "./getSpecificCampaignAndOthersController";
import calculateDonateAmountAndUser from "./calculateDonateAmountAndUserForSpecificCampaignController";
import volunteerCreate from "./volunteerCreateController";

import getBioMedicalServices from "./getBioMedicalServices";
import getUser from "./getUserController";
import testBooking from "./testBookingController";
import getUsers from "./getAllUserController";
const allControllers = {
  home,

  // user
  userCreate,
  getUser,
  getUsers,

  // blood request
  createBloodRequest,
  getBloodRequests,

  // campaign
  createCampaign,
  getAllCampaigns,
  getSpecificCampaignAndOthers,
  calculateDonateAmountAndUser,
  volunteerCreate,

  // donor
  createDonor,
  getDonors,

  // payment
  stripePayment,


  // bio madical
  getBioMedicalServices,

  testBooking
};

export default allControllers;
