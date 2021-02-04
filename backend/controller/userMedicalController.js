import { UserMedical } from "../models/Medical.js";

// @route: GET /user/medical
// @purpose: get all user medical
export const getUserMedical = async (req, res) => {
  try {
    const userMedical = await UserMedical.find();
    res.status(200).json(userMedical);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: POST /user/medical
// @purpose: POST user medical
export const postUserMedical = async (req, res) => {
  try {
    const body = req.body;
    const userMedical = new UserMedical(body);
    const newUserMedical = await userMedical.save();
    res.status(200).json(newUserMedical);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
