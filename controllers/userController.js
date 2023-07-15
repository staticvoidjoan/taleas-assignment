const User = require('../Models/userModel');
const Product = require('../Models/productModel');
const mongoose = require("mongoose");

module.exports.createUser = async(req,res,next) => {
    try{
        // const user = await User.create(req.body)
        const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        isVerified: req.body.isVerified,
        favouriteDrink: req.body.favouriteDrink,
        coupons: req.body.coupons
    });
        res.status(201).json(user);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}

module.exports.getAllUsers = async(req,res,next) => {
    try{
        const users = await User.find({}).populate("favouriteDrink").populate("coupons");
        res.status(200).json(users);
    } catch(error){
        res.status(500).json({message: error.message});
      }
}

module.exports.getOneUser = async(req,res,next) => {
    try{
        const {id} = req.params;
        const users = await User.findById(id).populate("favouriteDrink").populate("coupons")
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.UpdateUser = async (req,res,next) => {
    try{
        const {id} = req.params;
        const users = await User.findByIdAndUpdate(id,req.body)
        if(!users){
            return res.status(404).json({message:error.message})
        }
        res.status(200).json(users);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}


module.exports.deleteOneUser = async (req,res,next) => {
    try{
        const {id} = req.params;
        const users = await User.findByIdAndDelete(id)
        if(!users){
            return res.status(404).json({message:error.message})
        }
        res.status(200).json(users)
    } catch (error){
        res.status(500).json({message:error.message})
    }
}