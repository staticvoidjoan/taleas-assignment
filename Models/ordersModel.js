const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  OrderDate: {
    type: Date,
    required: true,
  },
  productOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  couponsUsed: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
