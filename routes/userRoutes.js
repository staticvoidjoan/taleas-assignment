const userController = require("../controllers/userController");

module.exports = (app) => {
  app.post("/coffeshop/users", userController.createUser);
  app.get("/coffeshop/users", userController.getAllUsers);
  app.get("/coffeshop/users/:id", userController.getOneUser);
  app.put("/coffeshop/users/:id", userController.UpdateUser);
  app.delete("/coffeshop/users/:id", userController.deleteOneUser);
};
