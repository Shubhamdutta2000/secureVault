import {UserModel} from "../models/User.js";

const userPost = (req, res) => {};

const userGet = async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
};

export { userGet, userPost };
