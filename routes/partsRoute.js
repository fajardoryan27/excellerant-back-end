module.exports = app => {
    const parts = require("../controllers/partsController.js");
    var router = require("express").Router();
  
    // Create a new Part
    router.post("/", parts.create);
  
    // Retrieve all Parts
    router.get("/", parts.findAll);
  
    // Retrieve all published Parts
    router.get("/published", parts.findAllPublished);
  
    // Retrieve a single Part with id
    router.get("/:id", parts.findOne);
  
    // Update a Part with id
    router.put("/:id", parts.update);
  
    // Delete a Part with id
    router.delete("/:id", parts.delete);
  
    // Delete all Parts
    router.delete("/", parts.deleteAll);
  
    app.use('/api/parts', router);
  };