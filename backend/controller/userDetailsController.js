import { UserDetail } from "../models/Detail.js";

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ errMessage: err });
  }
};

// @route: GET /user/details
export const getUserDetails = async (req, res) => {
  try {
    const userDetails = await UserDetail.find();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: POSt /user/details
export const postUserDetails = async (req, res) => {
  const body = req.body;
  const userDetails = new UserDetail(body);
  try {
    const newUserDetails = await userDetails.save();
    res.status(200).json(newUserDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
