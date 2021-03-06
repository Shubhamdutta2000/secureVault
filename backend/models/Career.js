import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const financeSchema = new Schema({
  in_hand: String,
  ctc: String,
  salary_slips: String,
});

const careerInstancesSchema = Schema({
  company_name: String,
  company_post: String,
  finance: financeSchema,
});

const nonServicesPersuitsSchema = Schema({
  freelancing: String,
  bussiness: String,
  non_profits: String,
});

const careerSchema = Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  resume: String,
  career_instances: careerInstancesSchema,
  non_service_persuits: nonServicesPersuitsSchema,
  password: {
    type: String,
    required: true,
  },
});

//  Encrypt a password before saving document
careerSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, 10);
});

const UserCareer = mongoose.model("Career", careerSchema);
export { UserCareer, careerSchema };
