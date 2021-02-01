import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userDetails: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Detail",
  },
  userDocuments: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Document",
  },
  userEducation: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Education",
  },
  userCareer: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Career",
  },
  userFinance: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Finance",
  },
  userMedical: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Medical",
  },
});

const UserModel = mongoose.model("User", userSchema);
export { UserModel, userSchema };
