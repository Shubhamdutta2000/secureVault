import { UserEducation } from "../models/Education.js";
import bcrypt from "bcrypt";

// @route: GET /user/education
// @purpose: get all user education
export const getUserEducation = async (req, res) => {
  const userEducation = await UserEducation.find();
  if (userEducation) {
    res.status(200).json(userEducation);
  } else {
    res.status(404).json({ errMessage: "no user education details present" });
  }
};

// @route: GET /user/education/:id
// @purpose: get user education by id
export const getUserEducationById = async (req, res) => {
  const { password } = req.body;

  const userEducation = await UserEducation.findOne({ _id: req.params.id });
  if (userEducation) {
    const hashedPassword = userEducation.password;
    const checkEducationPassword = await bcrypt.compare(
      password,
      hashedPassword
    );
    if (checkEducationPassword) {
      res.status(200).json(userEducation);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user education details does not exist" });
  }
};

// @route: POST /user/education
// @purpose: POST user education
export const postUserEducation = async (req, res) => {
  const body = req.body;
  const userEducation = new UserEducation(body);
  try {
    await userEducation.save();
    res.status(200).json(userEducation);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: PUT /user/education
// @purpose: PUT user education
export const putUserEducation = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updateduserEducation = await UserEducation.findOneAndUpdate(
      { _id: req.params.id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserEducation);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/education
// @purpose: delete all user education
export const deleteUserEducation = async (req, res) => {
  try {
    const deletedUserEducation = await UserEducation.deleteMany();
    res.status(200).json(deletedUserEducation);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
