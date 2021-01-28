const express = require("express");
const morgan = require("morgan");
const app = express();

//Mongodb connection
require("./config/db");

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/", require("./routes/index"));

//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
