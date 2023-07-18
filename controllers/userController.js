const User = require("../Models/userModel");
const Product = require("../Models/productModel");
const mongoose = require("mongoose");

module.exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const existingUser = await User.findOne({ firstName, lastName, email });
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
    const { firstName, lastName, email } = req.body;
    const existingUser = await User.findOne({ firstName, lastName, email });
    const users = await User.findById(id, req.body);
    if (
      existingUser.firstName == users.firstName &&
      existingUser.lastName == users.lastName &&
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
