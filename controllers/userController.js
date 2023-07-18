const User = require("../Models/userModel");
const Product = require("../Models/productModel");
const mongoose = require("mongoose");

module.exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, userName } = req.body;
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName)) {
      return res
        .status(400)
        .json({ message: "Invalid: Name should only contain letters" });
    }
    if (!nameRegex.test(lastName)) {
      return res
        .status(400)
        .json({ message: "Invalid: Last name should only contain letters" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const existingUser = await User.findOne({ userName, email });
    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return res.status(409).json({
        message: "Email already registered to an account try a different one",
      });
    }
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .populate("favouriteDrink")
      .populate("coupons")
      .populate("orders");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id)
      .populate("favouriteDrink")
      .populate("coupons")
      .populate("productOrders");
    if (!users) {
      res.status(404).json("Error no user with that id was found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, userName } = req.body;
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nameRegex.test(firstName)) {
      res
        .status(400)
        .json({ message: "Invalid first name" });
    }
    if (!nameRegex.test(lastName)) {
      res
        .status(400)
        .json({ message: "Invalid last name" });
    }
    if (!nameRegex.test(userName)) {
      res
        .status(400)
        .json({ message: "Invalid userName" });
    }
    if (!emailRegex.test(email)) {
      res
        .status(400)
        .json({message: "Invalid email"});
    }

    const existingUser = await User.findOne({ userName, email });
    const users = await User.findById(id, req.body);
    if (
      existingUser.userName == users.userName &&
      existingUser.email == users.email
    ) {
      res
        .status(400)
        .json(
          "Error: the info you provided is already registered to another user"
        );
    }
    if (!users) {
      return res.status(404).json("Error no user with that id was found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndDelete(id);
    if (!users) {
      return res.status(404).json("Error no user with that id was found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
