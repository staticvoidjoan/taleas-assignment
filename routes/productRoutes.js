const productController = require("../controllers/productController");

module.exports = (app) => {
  app.post("/coffeshop/products", productController.createProduct);
  app.get("/coffeshop/products", productController.getAllProducts);
  app.get("/coffeshop/products/:id", productController.getOneProduct);
  app.put("/coffeshop/products/:id",productController.updateProduct);
  app.delete("/coffeshop/products/:id", productController.softDeleteProduct);
};
