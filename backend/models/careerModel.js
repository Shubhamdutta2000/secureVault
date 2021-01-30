const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const financeSchema = Schema({
  in_hand: String,
  ctc: String,
  salary_slips: String,
});

const careerInstancesSchema = Schema({
  company_name: String,
  company_post: String,
  finance: [financeSchema],
});

const nonServicesPersuitsSchema = Schema({
  freelancing: String,
  bussiness: String,
  non_profits: String,
});

const careerSchema = Schema({
  resume: String,
  career_instances: [careerInstancesSchema],
  non_service_persuits: [nonServicesPersuitsSchema],
});

const userCareerModel = mongoose.model("Career", careerSchema);
module.exports = userCareerModel;
