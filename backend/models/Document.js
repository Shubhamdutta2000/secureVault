import mongoose from "mongoose";
const Schema = mongoose.Schema;

//@ pan card details
const panCard = new Schema({
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
export { documentsSchema, UserDocument };
