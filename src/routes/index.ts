import express from "express";
import allControllers from "../controllers";

const router = express.Router();
const {
  home,
  userCreate,
  createDonor,
  getDonors,
  createBloodRequest,
  stripePayment,
  getBloodRequests,
  createCampaign,
} = allControllers;

//all router operation
router.get("/", home);

// user
router.post("/usercreate", userCreate);

// donor
router.post("/donorcreate", createDonor);
router.get("/getdonars", getDonors);

// blood request
router.post("/createbloodrequest", createBloodRequest);
router.get("/getbloodrequests", getBloodRequests);

// campaign
router.post("/createcampaign", createCampaign);

// payment
router.post("/stripe", stripePayment);

export default router;
