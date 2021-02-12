import mongoose from "mongoose";
const Schema = mongoose.Schema;

import bcrypt from "bcrypt";

// individual details
const detailsSchema = new Schema({
  name: String,
  address: String,
  phn_no: Number,
  email: String,
  key: String,
  dob: String,
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
detailsSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, this.layer);
});

const UserDetail = mongoose.model("Detail", detailsSchema);
export { UserDetail };
