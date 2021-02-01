import mongoose from "mongoose";
const Schema = mongoose.Schema;

const otherCertificate = new Schema({
  academy: String,
  sports: String,
  events: String,
});

// college details
const collegeSchema = Schema({
  degree: String,
  course: String,
  discipline: String,
  semester_sheets: String,
  final_year_projects: Array,
  degree_certificates: Array,
  other_certificate: [otherCertificate],
});

// class 10 and 12 board details
const classRepresentativeBoardsSchema = Schema({
  marks: Number,
  grade: String,
  admit_card: String,
  registration_card: String,
  pass_certificate: String,
  grade_certificate: String,
});

const educationSchema = Schema({
  class_representative_boards: [classRepresentativeBoardsSchema],
  college: [collegeSchema],
});

const UserEducation = mongoose.model("Education", educationSchema);
export { educationSchema, UserEducation };
