const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const recordsSchema = Schema({
  vaccine_name: String,
  vaccine_date: Date,
  administered_by: String,
  administered_at: Date,
});

const vaccination_records = Schema({
  records: [recordsSchema],
});

const medicalSchema = Schema({
  vaccination_records: [vaccination_records],
  medical_illness_long_term: String,
});

const userMedicalModel = mongoose.model("Medical", medicalSchema);
module.exports = userMedicalModel;
