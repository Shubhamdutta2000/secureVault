import { UserMedical } from "../models/Medical.js";
import bcrypt from "bcrypt";

// @route: GET /user/medical
// @purpose: get user medical
export const getUserMedical = async (req, res, next) => {
  const { password } = req.body;

  const userMedical = await UserMedical.findOne({
    user: req.user._id,
  }).populate("user");
  if (userMedical) {
    const hashedPassword = userMedical.password;
    const checkMedicalPassword = await bcrypt.compare(password, hashedPassword);
    if (checkMedicalPassword) {
      res.status(200).json(userMedical);
    } else {
      res.status(401);
      const err = new Error("password does not match");
      next(err);
    }
  } else {
    res.status(404);
    const err = new Error("user medical details does not exist");
    next(err);
  }
};

// @route: POST /user/medical
// @purpose: POST user medical
export const postUserMedical = async (req, res, next) => {
  const medicalExist = await UserMedical.findOne({ user: req.user._id });
  if (!medicalExist) {
    const body = req.body;
    body.user = req.user._id; //add authenticated user id
    const userMedical = new UserMedical(body);
    try {
      await userMedical.save();
      res.status(200).json(userMedical);
    } catch (error) {
      res.status(404);
      next(error);
    }
  } else {
    res.status(404);
    const err = new Error(`one medical already given of ${req.user.name}`);
    next(err);
  }
};

// @route: PUT /user/medical
// @purpose: PUT user medical
export const putUserMedical = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const updatedUserMedical = await UserMedical.findOneAndUpdate(
      { user: req.user._id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedUserMedical);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/medical
// @purpose: delete 1 user medical
export const deleteUserMedical = async (req, res, next) => {
  try {
    const deletedUserMedical = await UserMedical.deleteOne({
      user: req.user._id,
    });
    res.status(200).json(deletedUserMedical);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
