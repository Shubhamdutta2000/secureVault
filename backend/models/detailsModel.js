const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

// individual details
const detailsSchema = Schema({
  name: String,
  address: String,
  phn_no: Number,
  email: String,
  key: String,
  dob: Date,
});

const userDetailsModel = mongoose.model("Detail", detailsSchema);
module.exports = userDetailsModel;
