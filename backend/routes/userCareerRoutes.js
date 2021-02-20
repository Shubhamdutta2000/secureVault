import express from "express";
const router = express.Router();
import {
  getUserCareer,
  postUserCareer,
  putUserCareer,
  deleteUserCareer,
} from "../controller/userCareerController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Career routes
router
  .route("/")
  .post(authProtect, getUserCareer)
  .put(authProtect, putUserCareer)
  .delete(authProtect, deleteUserCareer);
router.route("/post").post(authProtect, postUserCareer);

export default router;
