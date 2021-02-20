import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
  vaccine_name: String,
  vaccine_date: String,
  administered_by: String,
  administered_at: String,
});

const medicalSchema = Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  vaccination_records: [recordsSchema],
  medical_illness_long_term: String,
  password: {
    type: String,
    required: true,
  },
});

//  Encrypt a password before saving document
medicalSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, 10);
});

const UserMedical = mongoose.model("Medical", medicalSchema);
export { medicalSchema, UserMedical };
