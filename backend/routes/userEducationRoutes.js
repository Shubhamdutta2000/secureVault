import express from "express";
const router = express.Router();
import {
  getUserEducation,
  postUserEducation,
  putUserEducation,
  deleteUserEducation,
} from "../controller/userEducationController.js";

// Individual routes

// Education routes
router.get("/", getUserEducation);
router.post("/", postUserEducation);
router.patch("/:id", putUserEducation);
router.delete("/", deleteUserEducation);

export default router;
