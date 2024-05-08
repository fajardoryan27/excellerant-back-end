module.exports = app => {
    const permission = require("../controllers/permissionController.js");
    var router = require("express").Router();
  
    // Create a new Permission
    router.post("/", permission.create);
  
    // Retrieve all Permissions
    router.get("/", permission.findAll);
  
    // Retrieve all published Permissions
    router.get("/published", permission.findAllPublished);
  
    // Retrieve a single Permission with id
    router.get("/:id", permission.findOne);
  
    // Update a Permission with id
    router.put("/:id", permission.update);
  
    // Delete a Permission with id
    router.delete("/:id", permission.delete);
  
    // Delete all Permissions
    router.delete("/", permission.deleteAll);
  
    app.use('/api/permission', router);
  };