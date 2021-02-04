import express from "express";
const router = express.Router();
import {
  getUserFinance,
  postUserFinance,
  putUserFinance,
  deleteUserFinance,
} from "../controller/userFinanceController.js";

// Individual routes

// Finance routes
router.get("/", getUserFinance);
router.post("/", postUserFinance);
router.put("/:id", putUserFinance);
router.delete("/", deleteUserFinance);

export default router;
