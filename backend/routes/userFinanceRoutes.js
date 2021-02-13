import express from "express";
const router = express.Router();
import {
  getUserFinance,
  getUserFinanceById,
  postUserFinance,
  putUserFinance,
  deleteUserFinance,
} from "../controller/userFinanceController.js";

// Individual routes

// Finance routes
router
  .route("/")
  .get(getUserFinance)
  .post(postUserFinance)
  .delete(deleteUserFinance);
router.route("/:id").post(getUserFinanceById).put(putUserFinance);

export default router;
