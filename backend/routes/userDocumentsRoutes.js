import express from "express";
const router = express.Router();
import {
  getUserDocuments,
  postUserDocuments,
} from "../controller/userDocumentsController.js";

// Individual routes

// Documents routes
router.get("/", getUserDocuments);
router.post("/", postUserDocuments);

export default router;
