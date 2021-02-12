import express from "express";
const router = express.Router();
import {
  getUserDetail,
  postUserDetail,
  deleteUserDetails,
  putUserDetails,
} from "../controller/userDetailsController.js";

// Individual routes

// Details routes
router.post("/detail", getUserDetail);
router.post("/post/detail", postUserDetail);
router.put("/details/:id", putUserDetails);
router.delete("/details", deleteUserDetails);

export default router;
