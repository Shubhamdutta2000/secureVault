import express from "express";
const router = express.Router();
import {
  getUserMedical,
  getUserMedicalById,
  postUserMedical,
  putUserMedical,
  deleteUserMedical,
  deleteUserMedicalById,
} from "../controller/userMedicalController.js";

// Individual routes

// Medical routes
router
  .route("/")
  .get(getUserMedical)
  .post(postUserMedical)
  .delete(deleteUserMedical);

router
  .route("/:id")
  .post(getUserMedicalById)
  .put(putUserMedical)
  .delete(deleteUserMedicalById);

export default router;
