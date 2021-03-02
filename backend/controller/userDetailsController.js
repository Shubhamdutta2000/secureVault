import { UserDetail } from "../models/Detail.js";
import bcrypt from "bcrypt";

// @route: GET /user/details
// @purpose: get user details
export const getUserDetail = async (req, res, next) => {
  const { password } = req.body;

  const userDetails = await UserDetail.findOne({ user: req.user._id }).populate(
    "user"
  );
  if (userDetails) {
    const hashedPassword = userDetails.password;
    const checkDetailsPassword = await bcrypt.compare(password, hashedPassword);
    if (checkDetailsPassword) {
      res.status(200).json(userDetails);
    } else {
      res.status(401);
      const err = new Error("password does not match");
      next(err);
    }
  } else {
    res.status(404);
    const err = new Error("user details does not exist");
    next(err);
  }
};

// @route: POST /user/details
// @purpose: post user details (only 1)
export const postUserDetails = async (req, res, next) => {
  const detailsExist = await UserDetail.findOne({ user: req.user._id });
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
      res.status(404);
      next(error);
    }
  } else {
    res.status(404);
    const err = new Error(`one detail already given of ${req.user.name}`);
    next(err);
  }
};

// @route: PUT /user/details
// @purpose: PUT user details
export const putUserDetails = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const updateduserDetails = await UserDetail.findOneAndUpdate(
      { user: req.user._id },
      body,
      {
        new: true,
      }
    );
    res.status(200).json(updateduserDetails);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: DELETE /user/details
// @purpose: delete 1 user detail
export const deleteUserDetail = async (req, res, next) => {
  try {
    const deletedUserDetail = await UserDetail.deleteOne({
      user: req.user._id,
    });
    res.status(200).json(deletedUserDetail);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// // @route: DELETE /user/all/details
// // @purpose: delete all user details
// export const deleteAllUserDetails = async (req, res, next) => {
//   try {
//     const deletedUserDetails = await UserDetail.deleteMany();
//     res.status(200).json(deletedUserDetails);
//   } catch (error) {
//     res.status(404);
//     next(err);
//   }
// };
