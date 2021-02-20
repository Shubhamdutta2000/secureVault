import express from "express";
import { loginUser, registerUser } from "../controller/userController.js";
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
