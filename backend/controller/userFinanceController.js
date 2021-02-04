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

// @route: PUT /user/finance
// @purpose: PUT user finance
export const putUserFinance = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updateduserFinance = await UserFinance.findOneAndUpdate(
      { _id: req.params.id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserFinance);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/finance
// @purpose: delete all user finance
export const deleteUserFinance = async (req, res) => {
  try {
    const deletedUserFinance = await UserFinance.deleteMany();
    res.status(200).json(deletedUserFinance);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
