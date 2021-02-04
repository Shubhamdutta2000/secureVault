import express from "express";
const router = express.Router();
import {userGet, userPost} from "../controller/userPostController.js";

router.get("/user", userGet);
router.post("/user", userPost);

export default router;
