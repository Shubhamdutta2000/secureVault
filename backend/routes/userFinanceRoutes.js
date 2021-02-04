import express from "express";
const router = express.Router();
import {
  getUserFinance,
  postUserFinance,
} from "../controller/userFinanceController.js";

// Individual routes

// Finance routes
router.get("/", getUserFinance);
router.post("/", postUserFinance);

export default router;
