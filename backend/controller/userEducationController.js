import { UserEducation } from "../models/Education.js";

// @route: GET /user/education
// @purpose: get all user education
export const getUserEducation = async (req, res) => {
  try {
    const userEducation = await UserEducation.find();
    res.status(200).json(userEducation);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: POST /user/education
// @purpose: POST user education
export const postUserEducation = async (req, res) => {
  try {
    const body = req.body;
    const userEducation = new UserEducation(body);
    const newUserEducation = await userEducation.save();
    res.status(200).json(newUserEducation);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
