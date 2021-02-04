import express from "express";
const router = express.Router();
import {
  getUserMedical,
  postUserMedical,
  putUserMedical,
  deleteUserMedical,
} from "../controller/userMedicalController.js";

// Individual routes

// Medical routes
router.get("/", getUserMedical);
router.post("/", postUserMedical);
router.put("/:id", putUserMedical);
router.delete("/", deleteUserMedical);

export default router;
