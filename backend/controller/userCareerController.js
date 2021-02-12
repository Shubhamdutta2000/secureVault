import { UserCareer } from "../models/Career.js";
import bcrypt from "bcrypt";

// @route: GET /user/career
// @purpose: get all user career
export const getUserCareer = async (req, res) => {
  const userCareer = await UserCareer.find({});
  if (userCareer) {
    res.status(200).json(userCareer);
  } else {
    res.status(404).json({ message: "no user details present" });
  }
};

// @route: GET /user/career/:id
// @purpose: get user career by id
export const getUserCareerById = async (req, res) => {
  const { password } = req.body;

  const userCareer = await UserCareer.findOne({ _id: req.params.id });
  if (userCareer) {
    const hashedPassword = userCareer.password;
    const careerExist = await bcrypt.compare(password, hashedPassword);
    if (careerExist) {
      res.status(200).json(userCareer);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user does not exist" });
  }
};

// @route: POST /user/career
// @purpose: post user career
export const postUserCareer = async (req, res) => {
  const body = req.body;
  const userCareer = new UserCareer(body);

  await userCareer.save();
  res.status(200).json(userCareer);
};

// @route: PUT /user/career
// @purpose: PUT user career
export const putUserCareer = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updatedUserCareer = await UserCareer.findOneAndUpdate(
      { _id: req.params.id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedUserCareer);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/career
// @purpose: delete all user career
export const deleteUserCareer = async (req, res) => {
  try {
    const deletedUserCareer = await UserCareer.deleteMany();
    res.status(200).json(deletedUserCareer);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
