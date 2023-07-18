const Product = require("../Models/productModel");

module.exports.createProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const existingUser = Coupon.findOne(name);
    if (existingUser) {
      return res
        .status(409)
        .json("Error there is already a product with that name");
    }
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ messasge: error.message });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products) {
      return res.status(404).json("Error no product with that id was found");
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    
    const { id } = req.params;
    const product = await Product.findById(id, req.body);
    if (!product) {
      return res.status(404).json("Error no product with that id was found");
    }
    if (product.name == req.body.name){
      res.status(400).json("You cant use that name as it is already registered to another product")
    }
    const updatedProduct = await product.findByIdAndUpdate(id,req.body)
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: error });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.softDeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json("No product found with that ID");
    }

    product.isDeleted = true;
    await product.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
