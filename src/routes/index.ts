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
  testBooking,
  getSpecificCampaignAndOthers,
  calculateDonateAmountAndUser,
  volunteerCreate,
  getUsers
} = allControllers;

//all router operation
router.get("/", home);

// user
router.post("/usercreate", userCreate);
router.post("/getuser", getUser);
router.get("/getusers", getUsers);

// donor
router.post("/donorcreate", createDonor);
router.get("/getdonars", getDonors);

// blood request
router.post("/createbloodrequest", createBloodRequest);
router.get("/getbloodrequests", getBloodRequests);

// campaign
router.post("/createcampaign", createCampaign);
router.get("/getallcampaigns", getAllCampaigns);
router.post("/getspecificcampaignandothers", getSpecificCampaignAndOthers);
router.post("/calculatedonateamountanduser", calculateDonateAmountAndUser);
router.post("/volunteercreate", volunteerCreate);

// payment
router.post("/stripe", stripePayment);

router.post("/createCommunityChat", createCommunityChat)
router.get("/getCommunityChat", getCommunityChat)


// bio medical
router.get("/getservices", getBioMedicalServices);
router.post("/testbooking", testBooking);

export default router;
