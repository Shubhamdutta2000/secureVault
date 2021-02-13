import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

//@ pan card details
const panCard = new Schema({
  pan_card: String,
});

const documentsSchema = Schema({
  adhaar_card_no: Number,
  driver_license: String,
  panCard: panCard,
  voter_auth: String,
  passport: String,
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
documentsSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, this.layer);
});

const UserDocument = mongoose.model("Document", documentsSchema);
export { documentsSchema, UserDocument };
