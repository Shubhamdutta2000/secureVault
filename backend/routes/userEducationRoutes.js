import express from "express";
const router = express.Router();
import {
  getUserEducation,
  postUserEducation,
} from "../controller/userEducationController.js";

// Individual routes

// Education routes
router.get("/", getUserEducation);
router.post("/", postUserEducation);

export default router;
