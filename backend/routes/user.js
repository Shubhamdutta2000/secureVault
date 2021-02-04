import express from "express";
const router = express.Router();
import { getUser, getUserDetails } from "../controller/userController.js";

// As a whole route
router.get("/", getUser);

// Individual routes
// Details routes
router.get("/details", getUserDetails);

export default router;
