import express from "express";
import allControllers from "../controllers";

import { getChatHistory, postChatMessage } from '../controllers/socketIoController';

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
  getAllCampaigns,
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
router.get("/getallcampaigns", getAllCampaigns);

// payment
router.post("/stripe", stripePayment);

// socket





router.get('/chat-history', getChatHistory);
router.post('/chat-message', postChatMessage);





export default router;
