const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    min: [3, "The name must be at least 3 characters long"],
    max: [20],
    required: [true,"You must insert a first name"],
  },
  lastName: {
    type: String,
    required: true,
  },
  gender:{
    type: String,
    enum: ["M","F"],
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userName:{
    type: String,
    unique: true,
    required:true
  },
  favouriteDrink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  coupons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
