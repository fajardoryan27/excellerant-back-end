module.exports = app => {
    const user_role_permi = require("../controllers/userRolePermissionController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new User Role Permission
    router.post("/", authenticateJWT,user_role_permi.create);
  
    // Retrieve all User Role Permissions
    router.get("/", authenticateJWT,user_role_permi.findAll);
  
    // Retrieve all published User Role Permissions
    router.get("/published", authenticateJWT,user_role_permi.findAllPublished);
  
    // Retrieve a single User Role Permission with id
    router.get("/:id", authenticateJWT,user_role_permi.findOne);
  
    // Update a User Role Permission with id
    router.put("/:id", authenticateJWT,user_role_permi.update);
  
    // Delete a User Role Permission with id
    router.delete("/:id", authenticateJWT,user_role_permi.delete);
  
    // Delete all User Role Permissions
    router.delete("/", authenticateJWT,user_role_permi.deleteAll);
  
    app.use('/api/user_role_permission', router);
  };