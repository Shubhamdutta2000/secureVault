import express from "express";
const router = express.Router();
import {
  getUserMedical,
  postUserMedical,
  putUserMedical,
  deleteUserMedical,
} from "../controller/userMedicalController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Medical routes
router
  .route("/")
  .post(authProtect, getUserMedical)
  .put(authProtect, putUserMedical)
  .delete(authProtect, deleteUserMedical);
router.route("/post").post(authProtect, postUserMedical);

export default router;
