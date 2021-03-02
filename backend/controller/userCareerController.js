import { UserCareer } from "../models/Career.js";
import bcrypt from "bcrypt";

// @route: GET /user/career
// @purpose: get user career
export const getUserCareer = async (req, res, next) => {
  const { password } = req.body;

  const userCareer = await UserCareer.findOne({ user: req.user._id }).populate(
    "user"
  );
  if (userCareer) {
    const hashedPassword = userCareer.password;
    const checkCareerPassword = await bcrypt.compare(password, hashedPassword);
    if (checkCareerPassword) {
      res.status(200).json(userCareer);
    } else {
      res.status(401);
      const err = new Error("password does not match");
      next(err);
    }
  } else {
    res.status(404);
    const err = new Error("user career details does not exist");
    next(err);
  }
};

// @route: POST /user/career
// @purpose: post 1 user career
export const postUserCareer = async (req, res, next) => {
  const careerExist = await UserCareer.findOne({ user: req.user._id });
  if (!careerExist) {
    const body = req.body;
    body.user = req.user._id; // add authenticated user id
    const userCareer = new UserCareer(body);
    try {
      await userCareer.save();
      res.status(200).json(userCareer);
    } catch (error) {
      res.status(404);
      next(error);
    }
  } else {
    res.status(404);
    const err = new Error(`one career already be given of ${req.user.name}`);
    next(err);
  }
};

// @route: PUT /user/career
// @purpose: PUT user career
export const putUserCareer = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const updatedUserCareer = await UserCareer.findOneAndUpdate(
      { user: req.user._id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedUserCareer);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/career/:id
// @purpose: delete user career by id
export const deleteUserCareer = async (req, res, next) => {
  try {
    const deletedUserCareer = await UserCareer.deleteOne({
      user: req.user._id,
    });
    res.status(200).json(deletedUserCareer);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
