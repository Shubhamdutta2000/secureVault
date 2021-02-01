import mongoose from "mongoose";
const Schema = mongoose.Schema;

const financeSchema = new Schema({
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

const UserCareer = mongoose.model("Career", careerSchema);
export { UserCareer, careerSchema };
