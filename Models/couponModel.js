const mongoose = require("mongoose");
const couponSchema = mongoose.Schema({
  couponName: {
    type: String,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  expireDate: {
    type: Date,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
  applicableProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
