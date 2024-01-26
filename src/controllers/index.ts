import { home } from "./homeController";
import userCreate from "./userCreateController";
import userUpdate from "./userUpdateController";
import campaignCreate from "./campaignCreateController";
import campaignDelete from "./campaignDeleteController";
import getCampaign from "./getCampaignController";
import campaignUpdate from "./campaignUpdateController";
import getCampaigns from "./getCampaignsController";
import createDonor from "./donorCreateController";
import getDonors from "./getDonarsController";
import createBloodRequest from "./bloodReqController";
import getAllCampaigns from "./getAllCampaignsController";

import stripePayment from "./stripeController";
import getBloodRequests from "./getBloodReqController";


const allControllers = {
  // shammo controllers

  // shehub controllers
  home,

  // user
  userCreate,
  userUpdate,
  createBloodRequest,

  getBloodRequests,


  // campaign
  campaignCreate,
  campaignDelete,
  getCampaign,
  campaignUpdate,
  getCampaigns,


  getAllCampaigns,

  // donor
  createDonor,
  getDonors,


  // payment
  stripePayment
};

export default allControllers;
