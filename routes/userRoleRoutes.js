module.exports = app => {
    const user_role = require("../controllers/userRoleController.js");
    var router = require("express").Router();
  
    // Create a new User Role
    router.post("/", user_role.create);
  
    // Retrieve all User Roles
    router.get("/", user_role.findAll);
  
    // Retrieve all published User Roles
    router.get("/published", user_role.findAllPublished);
  
    // Retrieve a single User Role with id
    router.get("/:id", user_role.findOne);
  
    // Update a User Role with id
    router.put("/:id", user_role.update);
  
    // Delete a User Role with id
    router.delete("/:id", user_role.delete);
  
    // Delete all User Roles
    router.delete("/", user_role.deleteAll);
  
    app.use('/api/user_role', router);
  };