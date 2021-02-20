import express from "express";
const router = express.Router();
import {
  getUserDocument,
  postUserDocuments,
  putUserDocuments,
  deleteUserDocuments,
} from "../controller/userDocumentsController.js";

// Individual routes

// Documents routes
router
  .route("/")
  .post(getUserDocument)
  .put(putUserDocuments)
  .delete(deleteUserDocuments);
router.post("/post", postUserDocuments);

export default router;
