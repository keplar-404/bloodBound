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
  getUsers,
  campaignDelete,
  userDelete,
  blogPostCreate,
  getAllBlogPosts,
  getBlogPost,
  getTestBookings,
  statusChangeForTestBooking,
  deleteBlogPost,
  volunteerDelete,
  getTestBookingOfSpecificUser
} = allControllers;

//all router operation
router.get("/", home);

// user
router.post("/usercreate", userCreate);
router.post("/getuser", getUser);
router.get("/getusers", getUsers);
router.delete("/userdelete/:id", userDelete);

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
router.delete("/volunteerdelete", volunteerDelete);
router.delete("/campaigndelete/:id", campaignDelete);

// payment
router.post("/stripe", stripePayment);

router.post("/createCommunityChat", createCommunityChat);
router.get("/getCommunityChat", getCommunityChat);

// bio medical
router.get("/getservices", getBioMedicalServices);
router.post("/testbooking", testBooking);
router.get("/gettestbookingsofspecificuser/:email", getTestBookingOfSpecificUser);
router.get("/gettestbookings", getTestBookings);
router.patch("/statuschangefortestbooking/:id", statusChangeForTestBooking);

// blog post
router.post("/createblogpost", blogPostCreate);
router.get("/getblogposts", getAllBlogPosts);
router.get("/getblogpost/:id", getBlogPost);
router.delete("/deleteblogpost/:id", deleteBlogPost);

export default router;
