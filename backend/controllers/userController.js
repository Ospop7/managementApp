const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //   Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill in all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("password must be at least 6 characters");
  }

  //    Check if user email already exists
  // When you interact with database you need model
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }
  // Create new user if user don't exit
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {});
const logout = asyncHandler(async (req, res) => {});
module.exports = {
  registerUser,
  loginUser,
  logout,
};
