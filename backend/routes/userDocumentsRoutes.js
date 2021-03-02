import express from "express";
const router = express.Router();
import {
  getUserDocument,
  postUserDocuments,
  putUserDocuments,
  deleteUserDocument,
} from "../controller/userDocumentsController.js";
import authProtect from "../middleware/authenticate.js";

// Individual routes

// Documents routes
router
  .route("/")
  .post(authProtect, getUserDocument)
  .put(authProtect, putUserDocuments)
  .delete(authProtect, deleteUserDocument);
router.post("/post", authProtect, postUserDocuments);

export default router;
