import { home } from "./homeController";
import userCreate from "./userCreateController";
import userUpdate from "./userUpdateController";
import campaignCreate from "./campaignCreateController";
import campaignDelete from "./campaignDeleteController";
import getCampaign from "./getCampaignController";
import campaignUpdate from "./campaignUpdateController";
import getCampaigns from "./getCampaignsController";
import createDonor from "./donorCreateController";

const allControllers = {
  // shammo controllers

  // shehub controllers
  home,
  
  // user
  userCreate,
  userUpdate,

  // campaign
  campaignCreate,
  campaignDelete,
  getCampaign,
  campaignUpdate,
  getCampaigns,

  // donor
  createDonor,
};

export default allControllers;
