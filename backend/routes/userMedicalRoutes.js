import express from "express";
const router = express.Router();
import {
  getUserMedical,
  postUserMedical,
} from "../controller/userMedicalController.js";

// Individual routes

// Medical routes
router.get("/", getUserMedical);
router.post("/", postUserMedical);

export default router;
