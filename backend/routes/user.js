import express from "express";
const router = express.Router();
import {
  getUser,
  getUserDetails,
  postUserDetails,
  deleteUserDetails,
} from "../controller/userDetailsController.js";

// As a whole route
router.get("/", getUser);

// Individual routes

// Details routes
router.get("/details", getUserDetails);
router.post("/details", postUserDetails);
router.delete("/details", deleteUserDetails);

export default router;
