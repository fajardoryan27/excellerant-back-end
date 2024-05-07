module.exports = app => {
    const head = require("../controllers/headController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", head.create);
  
    // Retrieve all Tutorials
    router.get("/", head.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", head.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", head.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", head.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", head.delete);
  
    // Delete all Tutorials
    router.delete("/", head.deleteAll);
  
    app.use('/api/head', router);
  };