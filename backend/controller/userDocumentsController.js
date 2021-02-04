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
