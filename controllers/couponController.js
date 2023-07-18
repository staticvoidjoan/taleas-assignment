const Coupon = require("../Models/couponModel");

module.exports.createCoupon = async (req, res, next) => {
  try {
    const { name } = req.params;
    const existingCoupon = Coupon.findOne(name);
    if (existingCoupon) {
      return res
        .status(409)
        .json("Error there is already a coupon with that name");
    }
    const coupon = await Coupon.create(req.body);
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllCoupons = async (req, res, next) => {
  try {
    const coupons = await Coupon.find({});
    res.status(200).json(coupons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getCouponById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupons = await Coupon.findById(id);
    if (!coupons) {
      return res.status(404).json("Error a coupon with that id was not found");
    }
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    const coupon = await Coupon.findById(id);
    if (!coupon) {
      return res.status(404).json("Error: a coupon with that id was not found");
    }

    if (coupon.name === req.body.name) {
      return res
        .status(400)
        .json(
          "You can't use that name as it is already registered to another coupon"
        );
    }
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedCoupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupons = await Coupon.findByIdAndDelete(id);
    if (!coupons) {
      return res.status(404).json("Error a coupon with that id was not found");
    }
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.softDeleteCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    const coupon = await Coupon.findById(id);
    if (!coupon) {
      return res.status(404).json("Error: that coupon does not exist");
    }
    coupon.isDeleted = true;
    await coupon.save();
    res.status(200).json({ message: error.message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
