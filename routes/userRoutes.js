const userController = require("../controllers/userController");

module.exports = (app) => {
  app.post("/coffeshop", userController.createUser);
  app.get("/coffeshop",userController.getAllUsers);
  app.get("/coffeshop/:id",userController.getOneUser);
  app.put("/coffeshop/:id",userController.UpdateUser);
  app.delete("/coffeshop/:id",userController.deleteOneUser)
};
