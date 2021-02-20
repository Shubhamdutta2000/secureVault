import express from "express";
const router = express.Router();
import {
  getUserEducation,
  postUserEducation,
  putUserEducation,
  deleteUserEducation,
} from "../controller/userEducationController.js";
import authProtect from "../middleware/authenticate.js";
// Individual routes

// Education routes
router
  .route("/")
  .post(authProtect, getUserEducation)
  .put(authProtect, putUserEducation)
  .delete(authProtect, deleteUserEducation);
router.route("/post").post(authProtect, postUserEducation);

export default router;
