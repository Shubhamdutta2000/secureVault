import express from "express";
import morgan from "morgan";
import homeRouter from "./routes/homeRouter.js";
import userDetailsRouter from "./routes/userDetailsRoutes.js";
import userDocumentsRouter from "./routes/userDocumentsRoutes.js";
import userCareerRouter from "./routes/userCareerRoutes.js";
import mongooseConnection from "./config/db.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongodb connection
mongooseConnection();

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/", homeRouter);
app.use("/user/details", userDetailsRouter);
app.use("/user/documents", userDocumentsRouter);
app.use("/user/career", userCareerRouter);

//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
