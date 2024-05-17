module.exports = app => {
    const user = require("../../controllers/User/userController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new User
    router.post("/sign_up", user.create);
  
    // Retrieve all Users
    router.get("/", authenticateJWT, user.findAll);
  
    // Retrieve all published Users
    router.get("/published",authenticateJWT, user.findAllPublished);
  
    // Retrieve a single User with id
    router.get("/:id",authenticateJWT, user.findOne);
  
    // Update a User with id
    router.put("/:id",authenticateJWT,  user.update);
  
    // Delete a User with id
    router.delete("/:id",authenticateJWT, user.delete);
  
    // Delete all Users
    router.delete("/",authenticateJWT, user.deleteAll);
  
    app.use('/api/user', router);
  };