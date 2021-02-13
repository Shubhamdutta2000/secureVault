import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
  panCard: panCard,
  itr_forms: String,
  bank_transaction: String,
  assets: assetsSchema,
  password: {
    type: String,
    required: true,
  },
  layer: {
    type: Number,
    required: true,
  },
});

//  Encrypt a password before saving document
financeSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, this.layer);
});

const UserFinance = mongoose.model("Finance", financeSchema);
export { financeSchema, UserFinance };
