import express from "express";
import allControllers from "../controllers";

const router = express.Router();
const {
  home,
  userCreate,
  userUpdate,
  campaignCreate,
  campaignDelete,
  getCampaign,
  campaignUpdate,
  getCampaigns,
  createDonor,
  getDonors,
  createBloodRequest,
} = allControllers;

//all router operation
router.get("/", home);

// user
router.post("/usercreate", userCreate);
router.put("/userupdate", userUpdate);
router.post("/bloodrequest", createBloodRequest);

// campaign
router.post("/campaigns", getCampaigns);
router.post("/campaign", getCampaign);
router.post("/campaigncreate", campaignCreate);
router.put("/campaignupdate", campaignUpdate);
router.delete("/campaigndelete", campaignDelete);

// donor
router.post("/donorcreate", createDonor);
router.get("/getdonars", getDonors);

export default router;
