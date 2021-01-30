const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

//@ pan card details
const pan_card = Schema({
  pan_card: String,
});

// assets details
const assetsSchema = Schema({
  commodities: String,
  cryptocurrencies: String,
  stocks: String,
  mutual_funds: String,
  ipos: String,
});

// user finance details
const financeSchema = Schema({
  pan_card: [pan_card],
  itr_forms: String,
  bank_transaction: String,
  assets: [assetsSchema],
});

const userFinanceModel = mongoose.model("Finance", financeSchema);
module.exports = userFinanceModel;
