import express from "express";
import morgan from "morgan";
import homeRouter from "./routes/indexRouter.js";
import mongooseConnection from "./config/db.js";
const app = express();

//Mongodb connection
mongooseConnection();

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/", homeRouter);

//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
