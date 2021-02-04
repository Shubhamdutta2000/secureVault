import express from "express";
import morgan from "morgan";
import homeRouter from "./routes/homeRouter.js";
import userRouter from "./routes/user.js";
import mongooseConnection from "./config/db.js";

// For Testing mongoose Schema
import mongoose from "mongoose";
import jsonSchemas from "mongoose-schema-jsonschema";
import { userSchema } from "./models/User.js";
jsonSchemas(mongoose);

const jsonSchema = userSchema.jsonSchema();
console.dir(jsonSchema, { depth: null });

const app = express();

//Mongodb connection
mongooseConnection();

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/", homeRouter);
app.use("/", userRouter);

//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
