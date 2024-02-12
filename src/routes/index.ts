import express from "express";
import allControllers from "../controllers";
import createCommunityChat from "../controllers/createCommunityChat";

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
  getBioMedicalServices,
  getUser,
  testBooking
} = allControllers;

//all router operation
router.get("/", home);

// user
router.post("/usercreate", userCreate);
router.post("/getuser", getUser);


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

// bio madical
router.get("/getservices", getBioMedicalServices);


router.post("/testbooking", testBooking);

//communityChat
router.post("createCommunityChat", createCommunityChat)

export default router;
