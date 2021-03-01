import express from "express";
import morgan from "morgan";
import homeRouter from "./routes/homeRouter.js";
import userDetailsRouter from "./routes/userDetailsRoutes.js";
import userDocumentsRouter from "./routes/userDocumentsRoutes.js";
import userCareerRouter from "./routes/userCareerRoutes.js";
import userEducationRouter from "./routes/userEducationRoutes.js";
import userFinanceRouter from "./routes/userFinanceRoutes.js";
import userMedicalRouter from "./routes/userMedicalRoutes.js";
import mongooseConnection from "./config/db.js";
import userRouter from "./routes/userRouter.js";

import { NotFound, errorhandler } from "./middleware/errorHandling.js";

import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongodb connection
mongooseConnection();

//Middleware
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/", homeRouter);
app.use("/user/details", userDetailsRouter);
app.use("/user/documents", userDocumentsRouter);
app.use("/user/career", userCareerRouter);
app.use("/user/education", userEducationRouter);
app.use("/user/finance", userFinanceRouter);
app.use("/user/medical", userMedicalRouter);
app.use("/user", userRouter);

// error handling
app.use(NotFound);
app.use(errorhandler);

export default app;
