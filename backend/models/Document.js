import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const documentsSchema = Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  adhaar_card: {
    type: String,
    required: true,
  },
  driver_license: {
    type: String,
  },
  panCard: {
    type: String,
  },
  voter_card: {
    type: String,
  },
  passport: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

//  Encrypt a password before saving document
documentsSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, 10);
});

const UserDocument = mongoose.model("Document", documentsSchema);
export { documentsSchema, UserDocument };
