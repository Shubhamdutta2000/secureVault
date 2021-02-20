import { UserDetail } from "../models/Detail.js";
import bcrypt from "bcrypt";

// @route: GET /user/details
// @purpose: get user details
export const getUserDetail = async (req, res) => {
  const { password } = req.body;

  const userDetails = await UserDetail.findOne({}).populate("User");
  if (userDetails) {
    const hashedPassword = userDetails.password;
    const checkDetailsPassword = await bcrypt.compare(password, hashedPassword);
    if (checkDetailsPassword) {
      res.status(200).json(userDetails);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user details does not exist" });
  }
};

// @route: POST /user/details
// @purpose: post user details (only 1)
export const postUserDetails = async (req, res) => {
  const detailsExist = await UserDetail.findOne({});
  if (!detailsExist) {
    const body = req.body;
    body.user = req.user._id; // add authenticated user id
    body.name = req.user.name; // add authenticated user name
    body.email = req.user.email; // add authenticated user email
    const userDetails = new UserDetail(body);
    try {
      await userDetails.save();
      res.status(200).json(userDetails);
    } catch (error) {
      res.status(404).json({ errMessage: error });
    }
  } else {
    res.status(404).json({ message: "one detail already be given" });
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

// @route: DELETE /user/details/:id
// @purpose: delete user details by id
export const deleteUserDetailById = async (req, res) => {
  try {
    const deletedUserDetail = await UserDetail.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedUserDetail);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
