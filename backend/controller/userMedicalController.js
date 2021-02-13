import { UserMedical } from "../models/Medical.js";
import bcrypt from "bcrypt";

// @route: GET /user/medical
// @purpose: get all user medical
export const getUserMedical = async (req, res) => {
  const userMedical = await UserMedical.find();
  if (userMedical) {
    res.status(200).json(userMedical);
  } else {
    res.status(404).json({ errMessage: "no user medical details present" });
  }
};

// @route: GET /user/medical/:id
// @purpose: get user medical by id
export const getUserMedicalById = async (req, res) => {
  const { password } = req.body;

  const userMedical = await UserMedical.findOne({ _id: req.params.id });
  if (userMedical) {
    const hashedPassword = userMedical.password;
    const checkMedicalPassword = await bcrypt.compare(password, hashedPassword);
    if (checkMedicalPassword) {
      res.status(200).json(userMedical);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user medical details does not exist" });
  }
};

// @route: POST /user/medical
// @purpose: POST user medical
export const postUserMedical = async (req, res) => {
  const body = req.body;
  const userMedical = new UserMedical(body);
  try {
    await userMedical.save();
    res.status(200).json(userMedical);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: PUT /user/medical
// @purpose: PUT user medical
export const putUserMedical = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updatedUserMedical = await UserMedical.findOneAndUpdate(
      { _id: req.params.id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedUserMedical);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/medical
// @purpose: delete all user medical
export const deleteUserMedical = async (req, res) => {
  try {
    const deletedUserMedical = await UserMedical.deleteMany();
    res.status(200).json(deletedUserMedical);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
