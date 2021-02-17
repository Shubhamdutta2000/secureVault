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
router
  .route("/")
  .post(getUserDocuments)
  .put(putUserDocuments)
  .delete(deleteUserDocuments);
router.post("/post", postUserDocuments);

export default router;
