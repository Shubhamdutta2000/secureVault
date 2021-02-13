import express from "express";
const router = express.Router();
import {
  getUserEducation,
  getUserEducationById,
  postUserEducation,
  putUserEducation,
  deleteUserEducation,
} from "../controller/userEducationController.js";

// Individual routes

// Education routes
router
  .route("/")
  .get(getUserEducation)
  .post(postUserEducation)
  .delete(deleteUserEducation);
router.route("/:id").post(getUserEducationById).put(putUserEducation);

export default router;
