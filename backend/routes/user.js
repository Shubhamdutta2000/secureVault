import express from "express";
const router = express.Router();
import {
  getUser,
  getUserDetails,
  postUserDetails,
} from "../controller/userDetailsController.js";

// As a whole route
router.get("/", getUser);

// Individual routes

// Details routes
router.get("/details", getUserDetails);
router.post("/details", postUserDetails);

export default router;
