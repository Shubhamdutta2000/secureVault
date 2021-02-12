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
router
  .route("/")
  .get(getUserDetails)
  .post(postUserDetails)
  .delete(deleteUserDetails);
router.route("/:id").post(getUserDetailById).put(putUserDetails);

export default router;
