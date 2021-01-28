const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("useCreateIndex", true);

console.log(process.env.DB_URI);
module.exports = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error while connecting to db"));
