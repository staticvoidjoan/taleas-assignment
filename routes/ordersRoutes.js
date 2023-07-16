const ordersController = require("../controllers/ordersController");


module.exports = function (app) {
    app.post("/coffeshop/orders",ordersController.createOrder);
    app.get("/coffeshop/orders",ordersController.getAllOrders);
}