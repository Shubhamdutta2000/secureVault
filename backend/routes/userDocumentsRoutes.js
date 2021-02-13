import express from "express";
const router = express.Router();
import {
  getUserDocuments,
  postUserDocuments,
  putUserDocuments,
  deleteUserDocuments,
  deleteUserDocumentsById,
} from "../controller/userDocumentsController.js";

// Individual routes

// Documents routes
router.route("/").post(getUserDocuments).delete(deleteUserDocuments);
router.post("/post", postUserDocuments);
router.route("/:id").put(putUserDocuments).delete(deleteUserDocumentsById);

export default router;
