import express from "express";
const router = express.Router();
import {
  getUserCareer,
  postUserCareer,
} from "../controller/userCareerController.js";

// Individual routes

// Career routes
router.get("/", getUserCareer);
router.post("/", postUserCareer);

export default router;
