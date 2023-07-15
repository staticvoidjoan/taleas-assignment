const couponController = require("../controllers/couponController")

module.exports = (app) => {
    app.post("/coffeshop/coupons",couponController.createCoupon);
    app.get("/coffeshop/coupons",couponController.getAllCoupons);
    app.get("/coffeshop/coupons/:id",couponController.getCouponById);
    app.put("/coffeshop/coupons/:id",couponController.updateCoupon);
    app.delete("/coffeshop/coupons/:id",couponController.deleteCoupon);
}