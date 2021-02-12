import { UserDocument } from "../models/Document.js";
import bcrypt from "bcrypt";

// @route: GET /user/documents
// @purpose: get all user documents
export const getUserDocuments = async (req, res) => {
  const userDocuments = await UserDocument.find();
  if (userDocuments) {
    res.status(200).json(userDocuments);
  } else {
    res.status(404).json({ message: "no user details present" });
  }
};

// @route: GET /user/documents/:id
// @purpose: get user documents by id
export const getUserDocumentsById = async (req, res) => {
  const { password } = req.body;

  const userDocuments = await UserDocument.findOne({ _id: req.params.id });
  if (userDocuments) {
    const hashedPassword = userDocuments.password;
    const DocumentsExist = await bcrypt.compare(password, hashedPassword);
    if (DocumentsExist) {
      res.status(200).json(userDocuments);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user does not exist" });
  }
};

// @route: POST /user/documents
// @purpose: POST user documents
export const postUserDocuments = async (req, res) => {
  const body = req.body;
  const userDocuments = new UserDocument(body);
  try {
    await userDocuments.save();
    res.status(200).json(userDocuments);
  } catch (error) {
    res.status(404).json({ errMessage: error });
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
