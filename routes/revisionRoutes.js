module.exports = app => {
    const revisions = require("../controllers/revisionController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", revisions.create);
  
    // Retrieve all Tutorials
    router.get("/", revisions.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", revisions.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", revisions.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", revisions.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", revisions.delete);
  
    // Delete all Tutorials
    router.delete("/", revisions.deleteAll);
  
    app.use('/api/revision', router);
  };