module.exports = app => {
    const parts = require("../controllers/operationsController.js");
    var router = require("express").Router();
  
    // Create a new Operation
    router.post("/", parts.create);
  
    // Retrieve all Operations
    router.get("/", parts.findAll);
  
    // Retrieve all published Operations
    router.get("/published", parts.findAllPublished);
  
    // Retrieve a single Operation with id
    router.get("/:id", parts.findOne);
  
    // Update a Operation with id
    router.put("/:id", parts.update);
  
    // Delete a Operation with id
    router.delete("/:id", parts.delete);
  
    // Delete all Operations
    router.delete("/", parts.deleteAll);
  
    app.use('/api/operations', router);
  };