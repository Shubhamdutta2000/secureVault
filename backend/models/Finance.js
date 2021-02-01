import mongoose from "mongoose";
const Schema = new mongoose.Schema();

//@ pan card details
const panCard = Schema({
  panCard: String,
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
  panCard: [panCard],
  itr_forms: String,
  bank_transaction: String,
  assets: [assetsSchema],
});

const UserFinance = mongoose.model("Finance", financeSchema);
export default UserFinance;
