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

module.exports.getAllOrders = async(req,res,next) => {
    try {
        const orders = await Orders.find({});
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.getOrderById = async(req,res,next) => {
    try {
        const {id} = req.params.id;
        const orders =  await Orders.findById({id});
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.updateOrder = async (req,res,next) =>{
    try {
        const {id} = req.params.id;
        const orders = await Orders.findByIdAndUpdate({id});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports.deleteOrder = async(req,res,next) => {
    try {
        const {id} = req.params;
        const orders = await Orders.findByIdAndDelete({id});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}