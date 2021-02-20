import mongoose from "mongoose";
const Schema = mongoose.Schema;

import bcrypt from "bcrypt";

// individual details
const detailsSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phn_no: {
    type: Number,
  },
  email: {
    type: String,
  },
  dob: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//  Encrypt a password before saving document
detailsSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, 10);
});

const UserDetail = mongoose.model("Detail", detailsSchema);
export { UserDetail };
