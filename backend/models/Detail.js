import mongoose from "mongoose";
const Schema = mongoose.Schema;

// individual details
const detailsSchema = new Schema({
  name: String,
  address: String,
  phn_no: Number,
  email: String,
  key: String,
  dob: Date,
});

const UserDetail = mongoose.model("Detail", detailsSchema);
export { UserDetail, detailsSchema };
