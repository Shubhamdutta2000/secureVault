import express from "express";
const router = express.Router();

router.get("/", require("../controller/indexController.js"));

export default router;
