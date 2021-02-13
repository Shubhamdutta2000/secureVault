import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
  vaccine_name: String,
  vaccine_date: String,
  administered_by: String,
  administered_at: String,
});

const vaccinationRecords = Schema({
  records: recordsSchema,
});

const medicalSchema = Schema({
  vaccination_records: vaccinationRecords,
  medical_illness_long_term: String,
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
medicalSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, this.layer);
});

const UserMedical = mongoose.model("Medical", medicalSchema);
export { medicalSchema, UserMedical };
