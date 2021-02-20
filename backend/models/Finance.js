import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

// assets details
const assetsSchema = Schema({
  commodities: {
    type: String,
    required: true,
  },
  cryptocurrencies: String,
  stocks: String,
  mutual_funds: String,
  ipos: String,
});

// user finance details
const financeSchema = Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  panCard: String,
  itr_forms: String,
  bank_transaction: String,
  assets: [assetsSchema],
  password: {
    type: String,
    required: true,
  },
});

//  Encrypt a password before saving document
financeSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, 10);
});

const UserFinance = mongoose.model("Finance", financeSchema);
export { financeSchema, UserFinance };
