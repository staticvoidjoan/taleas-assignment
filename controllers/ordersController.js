const Orders = require ("../Models/ordersModel");
const Product = require("../Models/productModel");

module.exports.createOrder = async(req,res,next) => {
    try {
        
        const order = await Orders.create(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
// module.exports.createOrder = async(req,res,next) => {
//     try {
//         const {productOrders} = req.body;
//         const productPromises = productOrders.map((productId) =>{
//             Product.findById(productId)
//         });
//         const products = await Promise.all(productPromises);
//         const orderTotal = products.reduce((total,product) => {
//             return total + product.price;
//         }, 0);
//         const order = await Orders.create({
//             OrderDate : req.body.OrderDate,
//             productOrders,
//             orderTotal,
//             couponsUsed: req.body.couponsUsed
//         })
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// }

module.exports.getAllOrders = async(req,res,next) => {
    try {
        const {id} = req.params;
        const orders = await Orders.findById(id);
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}