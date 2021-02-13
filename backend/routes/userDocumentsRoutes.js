import express from "express";
const router = express.Router();
import {
  getUserDocuments,
  getUserDocumentsById,
  postUserDocuments,
  putUserDocuments,
  deleteUserDocuments,
} from "../controller/userDocumentsController.js";

// Individual routes

// Documents routes
router
  .route("/")
  .get(getUserDocuments)
  .post(postUserDocuments)
  .delete(deleteUserDocuments);
router.route("/:id").post(getUserDocumentsById).put(putUserDocuments);

export default router;
