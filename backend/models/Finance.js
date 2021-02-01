import mongoose from "mongoose";
const Schema = mongoose.Schema;

//@ pan card details
const panCard = new Schema({
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
export { financeSchema, UserFinance };
