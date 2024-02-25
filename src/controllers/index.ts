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
import campaignDelete from "./deleteCampaign";
import userDelete from "./userDeleteController";
import blogPostCreate from "./createBlogPostController";
import getAllBlogPosts from "./getAllBlogPostController";
import getBlogPost from "./getSpecificBlogPost";
import getTestBookings from "./getTestBookingsController";
import statusChangeForTestBooking from "./statusChangeForTestBooking";
import deleteBlogPost from "./deleteBlogPostController";

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
  userDelete,

  // blood request
  createBloodRequest,
  getBloodRequests,

  // campaign
  createCampaign,
  getAllCampaigns,
  getSpecificCampaignAndOthers,
  calculateDonateAmountAndUser,
  volunteerCreate,
  campaignDelete,

  // donor
  createDonor,
  getDonors,

  // payment
  stripePayment,


  // bio madical
  getBioMedicalServices,
  testBooking,
  getTestBookings,
  statusChangeForTestBooking,

  // blog post
  blogPostCreate,
  getAllBlogPosts,
  getBlogPost,
  deleteBlogPost
};

export default allControllers;
