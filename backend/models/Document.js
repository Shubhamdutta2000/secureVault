import mongoose from "mongoose";
const Schema = new mongoose.Schema();

//@ pan card details
const panCard = Schema({
  pan_card: String,
});

const documentsSchema = Schema({
  adhaar_card_no: Number,
  driver_license: String,
  panCard: [panCard],
  voter_auth: String,
  passport: String,
});

const UserDocument = mongoose.model("Document", documentsSchema);
export default UserDocument;
