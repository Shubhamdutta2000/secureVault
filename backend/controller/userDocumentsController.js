import { UserDocument } from "../models/Document.js";

// @route: GET /user/documents
// @purpose: get all user documents
export const getUserDocuments = async (req, res) => {
  try {
    const userDocuments = await UserDocument.find();
    res.status(200).json(userDocuments);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
