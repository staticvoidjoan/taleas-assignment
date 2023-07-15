const mongoose = require("mongoose")
const couponSchema = mongoose.Schema({
    couponName:{
        type: String
    },
    issueDate:{
        type: Date,
        required: true
    },
    expireDate:{
        type: Date,
        required: true
    },
    money:{
        type: Number,
        required: true
    },
    isValid:{
        type: Boolean,
        required:true
    }
})

const Coupon = mongoose.model("Coupon",couponSchema);
module.exports = Coupon;
