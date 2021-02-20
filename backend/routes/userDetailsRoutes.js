import express from "express";
const router = express.Router();
import {
  getUserDetail,
  postUserDetails,
  deleteUserDetails,
  putUserDetails,
} from "../controller/userDetailsController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Details routes
router
  .route("/")
  .post(authProtect, getUserDetail)
  .put(authProtect, putUserDetails)
  .delete(authProtect, deleteUserDetails);
router.route("/post").post(authProtect, postUserDetails);

export default router;
