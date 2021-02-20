import { UserModel } from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

// @purpose: Register new user and get token
// @route:   POST /user/register
// @access   Public
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await UserModel.findOne({ email: email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }
  const user = await UserModel.create({
    name,
    email,
    password,
  });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(404).json({ message: "Invaid User data" });
  }
};

// @purpose:   Auth user and get token
// @route:  POST /user/login
// @access  Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (user && (await user.checkPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};
