import { UserDocument } from "../models/Document.js";
import bcrypt from "bcrypt";

// @route: GET /user/documents
// @purpose: get 1 user documents
export const getUserDocument = async (req, res, next) => {
  const { password } = req.body;

  const userDocuments = await UserDocument.findOne({
    user: req.user._id,
  }).populate("user");
  if (userDocuments) {
    const hashedPassword = userDocuments.password;
    const checkDocumentPassword = await bcrypt.compare(
      password,
      hashedPassword
    );
    if (checkDocumentPassword) {
      res.status(200).json(userDocuments);
    } else {
      res.status(401);
      const err = new Error("password does not match");
      next(err);
    }
  } else {
    res.status(404);
    const err = new Error("user documents does not exist");
    next(err);
  }
};

// @route: POST /user/documents/post
// @purpose: POST user document (only 1)
export const postUserDocuments = async (req, res, next) => {
  const documentsExist = await UserDocument.findOne({ user: req.user._id });
  if (!documentsExist) {
    const body = req.body;
    body.user = req.user._id; // add authenticated user id
    const userDocuments = new UserDocument(body);
    try {
      await userDocuments.save();
      res.status(200).json(userDocuments);
    } catch (error) {
      res.status(404);
      next(error);
    }
  } else {
    res.status(404);
    const err = new Error("one document already be given");
    next(err);
  }
};

// @route: PUT /user/documents
// @purpose: PUT user documents
export const putUserDocuments = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const updateduserDocuments = await UserDocument.findOneAndUpdate(
      { user: req.user._id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserDocuments);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/documents
// @purpose: delete 1 user documents
export const deleteUserDocument = async (req, res, next) => {
  try {
    const deletedUserDocument = await UserDocument.deleteOne({
      user: req.user._id,
    });
    res.status(200).json(deletedUserDocument);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
