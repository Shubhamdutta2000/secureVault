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
router.route("/").post(getUserDocuments).delete(deleteUserDocuments);
router.route("/:id").put(putUserDocuments);
router.post("/post", postUserDocuments);

export default router;
