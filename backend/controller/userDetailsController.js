import { UserDetail } from "../models/Detail.js";

// @route: GET /user/details
// @purpose: get all user information data
export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ errMessage: err });
  }
};

// @route: GET /user/details
// @purpose: get all user details
export const getUserDetails = async (req, res) => {
  try {
    const userDetails = await UserDetail.find();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: POST /user/details
// @purpose: post user details
export const postUserDetails = async (req, res) => {
  try {
    const body = req.body;
    const userDetails = new UserDetail(body);
    const newUserDetails = await userDetails.save();
    res.status(200).json(newUserDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/details
// @purpose: delete all user details
export const deleteUserDetails = async (req, res) => {
  try {
    const deletedUserDetails = await UserDetail.deleteMany();
    res.status(200).json(deletedUserDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
