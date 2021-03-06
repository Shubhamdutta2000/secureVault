import dotenv from "dotenv";
import express from "express";
import path from "path";
const router = express.Router();
dotenv.config();

// production
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.join(__dirname, "/frontend/build")));
} else {
  router.get("/", (req, res) => {
    res.send("API is running....");
  });
}

export default router;
