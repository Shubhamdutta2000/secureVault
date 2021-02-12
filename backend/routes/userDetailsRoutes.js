import express from "express";
const router = express.Router();
import {
  getUserDetails,
  getUserDetailById,
  postUserDetails,
  deleteUserDetails,
  putUserDetails,
} from "../controller/userDetailsController.js";

// Individual routes

// Details routes
router.get("/details", getUserDetails);
router.post("/detail/:id", getUserDetailById);
router.post("/post/details", postUserDetails);
router.put("/details/:id", putUserDetails);
router.delete("/details", deleteUserDetails);

export default router;
