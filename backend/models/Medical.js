import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
  vaccine_name: String,
  vaccine_date: String,
  administered_by: String,
  administered_at: String,
});

const vaccinationRecords = Schema({
  records: [recordsSchema],
});

const medicalSchema = Schema({
  vaccination_records: [vaccinationRecords],
  medical_illness_long_term: String,
});

const UserMedical = mongoose.model("Medical", medicalSchema);
export { medicalSchema, UserMedical };
