import express from "express";
import allControllers from "../controllers";
import getCommunityChat from "../controllers/getCommunityChat";
import createCommunityChat from "../controllers/createCommunityChat";


const router = express.Router();
const {
  home,
  userCreate,
  getUser,
  createDonor,
  getDonors,
  createBloodRequest,
  stripePayment,
  getBloodRequests,
  createCampaign,
  getAllCampaigns,
  getBioMedicalServices,
  testBooking
} = allControllers;

//all router operation
router.get("/", home);

// user
router.post("/usercreate", userCreate);
router.get("/getuser", getUser);

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

router.post("/createCommunityChat", createCommunityChat)
router.get("/getCommunityChat", getCommunityChat)


// bio medical
router.get("/getservices", getBioMedicalServices);
router.post("/testbooking", testBooking);

export default router;
