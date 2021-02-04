import { UserFinance } from "../models/Finance.js";

// @route: GET /user/finance
// @purpose: get all user finance
export const getUserFinance = async (req, res) => {
  try {
    const userFinance = await UserFinance.find();
    res.status(200).json(userFinance);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: POST /user/finance
// @purpose: POST user finance
export const postUserFinance = async (req, res) => {
  try {
    const body = req.body;
    const userFinance = new UserFinance(body);
    const newUserFinance = await userFinance.save();
    res.status(200).json(newUserFinance);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
