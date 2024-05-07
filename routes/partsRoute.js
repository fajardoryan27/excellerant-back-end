module.exports = app => {
    const parts = require("../controllers/partsController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", parts.create);
  
    // Retrieve all Tutorials
    router.get("/", parts.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", parts.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", parts.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", parts.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", parts.delete);
  
    // Delete all Tutorials
    router.delete("/", parts.deleteAll);
  
    app.use('/api/parts', router);
  };