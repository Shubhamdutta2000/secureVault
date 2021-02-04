import { UserCareer } from "../models/Career.js";

// @route: GET /user/career
// @purpose: get all user career
export const getUserCareer = async (req, res) => {
  try {
    const userCareer = await UserCareer.find();
    res.status(200).json(userCareer);
  } catch (error) {
    res.status(404).json(error);
  }
};

// @route: POST /user/career
// @purpose: post user career
export const postUserCareer = async (req, res) => {
  try {
    const body = req.body;
    const userCareer = new UserCareer(body);
    const newUserCareer = await userCareer.save();
    res.status(200).json(newUserCareer);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
