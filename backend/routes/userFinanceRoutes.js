import express from "express";
const router = express.Router();
import {
  getUserFinance,
  postUserFinance,
  putUserFinance,
  deleteUserFinance,
} from "../controller/userFinanceController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Finance routes
router
  .route("/")
  .post(authProtect, getUserFinance)
  .put(authProtect, putUserFinance)
  .delete(authProtect, deleteUserFinance);
router.route("/post").post(authProtect, postUserFinance);

export default router;
