const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

//@ pan card details
const panCard = Schema({
  pan_card: String,
});

const documentsSchema = Schema({
  adhaar_card_no: Number,
  driver_license: String,
  pan_card: [panCard],
  voter_auth: String,
  passport: String,
});

const userDocumentsModel = mongoose.model("Document", documentsSchema);
module.exports = userDocumentsModel;
