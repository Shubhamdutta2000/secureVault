import express from "express";
const router = express.Router();
import {
  getUserDocuments,
  postUserDocuments,
  putUserDocuments,
  deleteUserDocuments,
} from "../controller/userDocumentsController.js";

// Individual routes

// Documents routes
router.get("/", getUserDocuments);
router.post("/", postUserDocuments);
router.put("/:id", putUserDocuments);
router.delete("/", deleteUserDocuments);

export default router;
