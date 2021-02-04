import { UserMedical } from "../models/Medical.js";

// @route: GET /user/medical
// @purpose: get all user medical
export const getUserMedical = async (req, res) => {
  try {
    const userMedical = await UserMedical.find();
    res.status(200).json(userMedical);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: POST /user/medical
// @purpose: POST user medical
export const postUserMedical = async (req, res) => {
  try {
    const body = req.body;
    const userMedical = new UserMedical(body);
    const newUserMedical = await userMedical.save();
    res.status(200).json(newUserMedical);
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
