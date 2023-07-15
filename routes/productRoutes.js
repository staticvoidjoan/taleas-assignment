const productController = require("../controllers/productController")

module.exports = (app) =>{
    app.post("/coffeshop/drinks",productController.createProduct);
    app.get("/coffeshop/drinks",productController.getAllProducts);
    app.get("/coffeshop/drinks/:id",productController.getOneProduct);
    app.delete("/coffeshop/drinks/:id",productController.deleteOneProduct)

}