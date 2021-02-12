import express from "express";
const router = express.Router();
import {
  getUserCareer,
  getUserCareerById,
  postUserCareer,
  putUserCareer,
  deleteUserCareer,
} from "../controller/userCareerController.js";

// Individual routes

// Career routes
router.get("/", getUserCareer);
router.post("/:id", getUserCareerById);
router.post("/", postUserCareer);
router.put("/:id", putUserCareer);
router.delete("/", deleteUserCareer);

export default router;
