const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    isVerified:{
        type: Boolean,
        required: true
    },
    favouriteDrink: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    coupons: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Coupon',
        required: true
    }]

}
);

const User = mongoose.model("User",userSchema)
module.exports = User;