import express from "express";
const router = express.Router();
import {
  getUserDocument,
  postUserDocuments,
  putUserDocuments,
  deleteUserDocuments,
} from "../controller/userDocumentsController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Documents routes
router
  .route("/")
  .post(authProtect, getUserDocument)
  .put(authProtect, putUserDocuments)
  .delete(authProtect, deleteUserDocuments);
router.post("/post", authProtect, postUserDocuments);

export default router;
