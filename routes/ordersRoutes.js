const ordersController = require("../controllers/ordersController");


module.exports = function (app) {
    app.post("/coffeshop/orders",ordersController.createOrder);
    app.get("/coffeshop/orders",ordersController.getAllOrders);
    app.get("./coffeshop/orders/:id",ordersController.getOrderById);
    app.put("./coffeshop/orders/:id",ordersController.updateOrder);
}