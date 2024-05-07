module.exports = app => {
    const permission = require("../controllers/permissionController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", permission.create);
  
    // Retrieve all Tutorials
    router.get("/", permission.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", permission.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", permission.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", permission.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", permission.delete);
  
    // Delete all Tutorials
    router.delete("/", permission.deleteAll);
  
    app.use('/api/permission', router);
  };