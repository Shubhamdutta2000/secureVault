import express from "express";
const router = express.Router();
import {
  getUser,
  getUserDetails,
  postUserDetails,
  deleteUserDetails,
  putUserDetails,
} from "../controller/userDetailsController.js";

// Individual routes

// Details routes
router.get("/", getUserDetails);
router.post("/", postUserDetails);
router.put("/:id", putUserDetails);
router.delete("/", deleteUserDetails);

export default router;
