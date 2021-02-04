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

// @route: POST /user/documents
// @purpose: POST user documents
export const postUserDocuments = async (req, res) => {
  try {
    const body = req.body;
    const userDocuments = new UserDocument(body);
    const newUserDocuments = await userDocuments.save();
    res.status(200).json(newUserDocuments);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
