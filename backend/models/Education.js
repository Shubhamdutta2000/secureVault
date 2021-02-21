import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const otherCertificate = new Schema({
  academy: String,
  sports: String,
  events: String,
});

// college details
const collegeSchema = Schema({
  name: String,
  degree: String,
  course: String,
  discipline: String,
  semester_sheets: String,
  final_year_projects: String,
  degree_certificates: String,
  other_certificate: otherCertificate,
});

// class 10 and 12 board details
const classRepresentativeBoardsSchema = Schema({
  name: String,
  marks: Number,
  grade: String,
  admit_card: String,
  registration_card: String,
  pass_certificate: String,
  grade_certificate: String,
});

const educationSchema = Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  class_representative_boards: classRepresentativeBoardsSchema,
  college: collegeSchema,
  password: {
    type: String,
    required: true,
  },
});

//  Encrypt a password before saving document
educationSchema.pre("save", async function (next) {
  // hashing of password based on layer no.
  this.password = await bcrypt.hash(this.password, 10);
});

const UserEducation = mongoose.model("Education", educationSchema);
export { educationSchema, UserEducation };
