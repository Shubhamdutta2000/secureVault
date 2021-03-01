import { UserEducation } from "../models/Education.js";
import bcrypt from "bcrypt";

// @route: GET /user/education
// @purpose: get user education
export const getUserEducation = async (req, res, next) => {
  const { password } = req.body;

  const userEducation = await UserEducation.findOne({}).populate("user");
  if (userEducation) {
    const hashedPassword = userEducation.password;
    const checkEducationPassword = await bcrypt.compare(
      password,
      hashedPassword
    );
    if (checkEducationPassword) {
      res.status(200).json(userEducation);
    } else {
      res.status(401);
      const err = new Error("password does not match");
      next(err);
    }
  } else {
    res.status(404);
    const err = new Error("user education details does not exist");
    next(err);
  }
};

// @route: POST /user/education
// @purpose: POST 1 user education
export const postUserEducation = async (req, res, next) => {
  const educationExist = await UserEducation.findOne({});
  if (!educationExist) {
    const body = req.body;
    body.user = req.user._id; // add authenticated user id
    const userEducation = new UserEducation(body);
    try {
      await userEducation.save();
      res.status(200).json(userEducation);
    } catch (error) {
      res.status(404);
      next(error);
    }
  } else {
    res.status(404);
    const err = new Error("one education already be given");
    next(err);
  }
};

// @route: PUT /user/education
// @purpose: PUT user education
export const putUserEducation = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updateduserEducation = await UserEducation.findOneAndUpdate(
      {},
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserEducation);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/education
// @purpose: delete all user education
export const deleteUserEducation = async (req, res, next) => {
  try {
    const deletedUserEducation = await UserEducation.deleteMany();
    res.status(200).json(deletedUserEducation);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
