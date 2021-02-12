import { UserDetail } from "../models/Detail.js";
import bcrypt from "bcrypt";

// @route: GET /user/detail
// @purpose: get user detail
export const getUserDetail = async (req, res) => {
  const { password } = req.body;

  const userDetails = await UserDetail.findOne();
  if (userDetails) {
    const hashedPassword = userDetails.password;
    const detailsExist = await bcrypt.compare(password, hashedPassword);
    if (detailsExist) {
      res.status(200).json(userDetails);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user does not exist" });
  }
};

// @route: POST /user/post/detail
// @purpose: post user detail
export const postUserDetail = async (req, res) => {
  const body = req.body;
  const userDetails = new UserDetail(body);
  try {
    const userDetailsExist = await UserDetail.findOne();
    // only 1 user details should be there
    if (!userDetailsExist) {
      await userDetails.save();
      res.status(200).json(userDetails);
    } else {
      res.status(404).json({ message: "details already exists" });
    }
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: PUT /user/details
// @purpose: PUT user details
export const putUserDetails = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const updateduserDetails = await UserDetail.findOneAndUpdate(
      { _id: req.params.id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/details
// @purpose: delete all user details
export const deleteUserDetails = async (req, res) => {
  try {
    const deletedUserDetails = await UserDetail.deleteMany();
    res.status(200).json(deletedUserDetails);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
