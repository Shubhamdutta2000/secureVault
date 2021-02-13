import express from "express";
const router = express.Router();
import {
  getUserMedical,
  getUserMedicalById,
  postUserMedical,
  putUserMedical,
  deleteUserMedical,
} from "../controller/userMedicalController.js";

// Individual routes

// Medical routes
router
  .route("/")
  .get(getUserMedical)
  .post(postUserMedical)
  .delete(deleteUserMedical);
router.route("/:id").post(getUserMedicalById).put(putUserMedical);

export default router;
