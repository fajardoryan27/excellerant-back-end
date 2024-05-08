module.exports = app => {
    const head = require("../controllers/headController.js");
    var router = require("express").Router();
  
    // Create a new Head
    router.post("/", head.create);
  
    // Retrieve all Heads
    router.get("/", head.findAll);
  
    // Retrieve all published Heads
    router.get("/published", head.findAllPublished);
  
    // Retrieve a single Head with id
    router.get("/:id", head.findOne);
  
    // Update a Head with id
    router.put("/:id", head.update);
  
    // Delete a Head with id
    router.delete("/:id", head.delete);
  
    // Delete all Heads
    router.delete("/", head.deleteAll);
  
    app.use('/api/head', router);
  };