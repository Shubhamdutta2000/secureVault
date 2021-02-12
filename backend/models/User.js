import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userDetails: {
    type: Schema.Types.ObjectId,
    ref: "Detail",
  },
  userDocuments: {
    type: Schema.Types.ObjectId,
    ref: "Document",
  },
  userEducation: {
    type: Schema.Types.ObjectId,
    ref: "Education",
  },
  userCareer: {
    type: Schema.Types.ObjectId,
    ref: "Career",
  },
  userFinance: {
    type: Schema.Types.ObjectId,
    ref: "Finance",
  },
  userMedical: {
    type: Schema.Types.ObjectId,
    ref: "Medical",
  },
});

const UserModel = mongoose.model("User", userSchema);
export { UserModel };
