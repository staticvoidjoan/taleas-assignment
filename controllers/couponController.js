const Coupon = require("../Models/couponModel");

module.exports.createCoupon = async(req,res,next) => {
    try{
        
        const coupon = await Coupon.create(req.body)
        res.status(200).json(coupon);
    } catch (error){
        res.status(500).json({message:error.message})
    }

}

module.exports.getAllCoupons = async(req,res,next) => {
    try{
        const coupons = await Coupon.find({})
        res.status(200).json(coupons)
    } catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports.getCouponById = async(req,res,next) => {
    try{
        const {id} = req.params;
        const coupons = await Coupon.findById(id);
        res.status(200).json(coupons);
    } catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.updateCoupon = async(req,res,next) =>{
    try{
        const {id} = req.params;
        const coupons = await Coupon.findByIdAndUpdate(id,req.body);
        res.status(200).json(coupons);
    } catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.deleteCoupon = async(req,res,next) =>{
    try{
        const {id} = req.params;
        const coupons = await Coupon.findByIdAndDelete(id);
        res.status(200).json(coupons)
    } catch(error){
        res.status(500).json({message:error.message})
    }
}