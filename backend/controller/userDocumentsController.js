import { UserDocument } from "../models/Document.js";
import bcrypt from "bcrypt";

// @route: GET /user/documents
// @purpose: get 1 user documents
export const getUserDocuments = async (req, res) => {
  const { password } = req.body;

  const userDocuments = await UserDocument.findOne({});
  if (userDocuments) {
    const hashedPassword = userDocuments.password;
    const checkDocumentPassword = await bcrypt.compare(
      password,
      hashedPassword
    );
    if (checkDocumentPassword) {
      res.status(200).json(userDocuments);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user documents does not exist" });
  }
};

// @route: POST /user/documents/post
// @purpose: POST user document (only 1)
export const postUserDocuments = async (req, res) => {
  const documentsExist = await UserDocument.findOne({});
  if (!documentsExist) {
    const body = req.body;
    const userDocuments = new UserDocument(body);
    try {
      await userDocuments.save();
      res.status(200).json(userDocuments);
    } catch (error) {
      res.status(404).json({ errMessage: error });
    }
  } else {
    res.status(404).json({ message: "one document already be given" });
  }
};

// @route: PUT /user/documents
// @purpose: PUT user documents
export const putUserDocuments = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updateduserDocuments = await UserDocument.findOneAndUpdate(
      { _id: req.params.id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserDocuments);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/documents
// @purpose: delete all user documents
export const deleteUserDocuments = async (req, res) => {
  try {
    const deletedUserDocuments = await UserDocument.deleteMany();
    res.status(200).json(deletedUserDocuments);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/documents/:id
// @purpose: delete all user documents by id
export const deleteUserDocumentsById = async (req, res) => {
  try {
    const deletedUserDocument = await UserDocument.findOneAndRemove(
      req.params.id
    );
    res.status(200).json(deletedUserDocument);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
