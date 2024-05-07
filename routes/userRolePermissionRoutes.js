module.exports = app => {
    const user_role_permi = require("../controllers/userRolePermissionController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user_role_permi.create);
  
    // Retrieve all Tutorials
    router.get("/", user_role_permi.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", user_role_permi.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", user_role_permi.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", user_role_permi.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", user_role_permi.delete);
  
    // Delete all Tutorials
    router.delete("/", user_role_permi.deleteAll);
  
    app.use('/api/user_role_permission', router);
  };