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
app.use("/user/education", userEducationRouter);
app.use("/user/finance", userFinanceRouter);
app.use("/user/medical", userMedicalRouter);

export default app;
