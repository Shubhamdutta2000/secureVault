import mongoose from "mongoose";
const Schema = new mongoose.Schema();

// individual details
const detailsSchema = Schema({
  name: String,
  address: String,
  phn_no: Number,
  email: String,
  key: String,
  dob: Date,
});

const UserDetail = mongoose.model("Detail", detailsSchema);
export default UserDetail;
