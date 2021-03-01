import { UserFinance } from "../models/Finance.js";
import bcrypt from "bcrypt";

// @route: GET /user/finance
// @purpose: get user finance
export const getUserFinance = async (req, res, next) => {
  const { password } = req.body;

  const userFinance = await UserFinance.findOne({}).populate("user");
  if (userFinance) {
    const hashedPassword = userFinance.password;
    const checkFinancePassword = await bcrypt.compare(password, hashedPassword);
    if (checkFinancePassword) {
      res.status(200).json(userFinance);
    } else {
      res.status(401);
      const err = new Error("password does not match");
      next(err);
    }
  } else {
    res.status(404);
    const err = new Error("user finance details does not exist");
    next(err);
  }
};

// @route: POST /user/finance
// @purpose: POST user finance
export const postUserFinance = async (req, res, next) => {
  const financeExist = await UserFinance.findOne({});
  if (!financeExist) {
    const body = req.body;
    body.user = req.user._id; //add authenticated user id
    const userFinance = new UserFinance(body);
    try {
      await userFinance.save();
      res.status(200).json(userFinance);
    } catch (error) {
      res.status(404);
      next(error);
    }
  } else {
    res.status(404);
    const err = new Error("one finance already be given");
    next(err);
  }
};

// @route: PUT /user/finance
// @purpose: PUT user finance
export const putUserFinance = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updateduserFinance = await UserFinance.findOneAndUpdate({}, body, {
      new: true,
    });
    res.status(200).json(updateduserFinance);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/finance
// @purpose: delete all user finance
export const deleteUserFinance = async (req, res, next) => {
  try {
    const deletedUserFinance = await UserFinance.deleteMany();
    res.status(200).json(deletedUserFinance);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/finance/:id
// @purpose: delete all user finance by id
export const deleteUserFinanceById = async (req, res, next) => {
  try {
    const deletedUserFinance = await UserFinance.findByIdAndRemove(
      req.params.id
    );
    res.status(200).json(deletedUserFinance);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
