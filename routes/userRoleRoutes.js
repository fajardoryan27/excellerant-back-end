module.exports = app => {
    const user_role = require("../controllers/userRoleController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new User Role
    router.post("/", authenticateJWT,user_role.create);
  
    // Retrieve all User Roles
    router.get("/", authenticateJWT,user_role.findAll);
  
    // Retrieve all published User Roles
    router.get("/published", authenticateJWT,user_role.findAllPublished);
  
    // Retrieve a single User Role with id
    router.get("/:id", authenticateJWT,user_role.findOne);
  
    // Update a User Role with id
    router.put("/:id", authenticateJWT,user_role.update);
  
    // Delete a User Role with id
    router.delete("/:id",authenticateJWT, user_role.delete);
  
    // Delete all User Roles
    router.delete("/", authenticateJWT,user_role.deleteAll);
  
    app.use('/api/user_role', router);
  };