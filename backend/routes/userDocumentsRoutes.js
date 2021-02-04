import express from "express";
const router = express.Router();
import { getUserDocuments } from "../controller/userDocumentsController.js";

// Individual routes

// Documents routes
router.get("/", getUserDocuments);

export default router;
