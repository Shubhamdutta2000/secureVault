import express from "express";
const router = express.Router();
import {
  getUserDetail,
  postUserDetails,
  deleteUserDetail,
  putUserDetails,
} from "../controller/userDetailsController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Details routes
router
  .route("/")
  .post(authProtect, getUserDetail)
  .put(authProtect, putUserDetails)
  .delete(authProtect, deleteUserDetail);
router.route("/post").post(authProtect, postUserDetails);

export default router;
