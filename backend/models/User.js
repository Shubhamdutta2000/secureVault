import mongoose from "mongoose";
import { careerSchema } from "./career.js";
import { detailsSchema } from "./Detail.js";
import { documentsSchema } from "./Document.js";
import { educationSchema } from "./education.js";
import { financeSchema } from "./finance.js";
import { medicalSchema } from "./medicine.js";
const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   userDetails: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Detail",
//   },
//   userDocuments: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Document",
//   },
//   userEducation: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Education",
//   },
//   userCareer: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Career",
//   },
//   userFinance: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Finance",
//   },
//   userMedical: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Medical",
//   },
// });

const userSchema = new Schema({
  userDetails: [detailsSchema],
  userDocuments: [documentsSchema],
  userEducation: [educationSchema],
  userCareer: [careerSchema],
  userFinance: [financeSchema],
  userMedical: [medicalSchema],
});

const UserModel = mongoose.model("User", userSchema);
export { UserModel, userSchema };
