module.exports = app => {
    const revisions = require("../controllers/revisionController.js");
    var router = require("express").Router();
  
    // Create a new Revision
    router.post("/", revisions.create);
  
    // Retrieve all Revisions
    router.get("/", revisions.findAll);
  
    // Retrieve all published Revisions
    router.get("/published", revisions.findAllPublished);
  
    // Retrieve a single Revision with id
    router.get("/:id", revisions.findOne);
  
    // Update a Revision with id
    router.put("/:id", revisions.update);
  
    // Delete a Revision with id
    router.delete("/:id", revisions.delete);
  
    // Delete all Revisions
    router.delete("/", revisions.deleteAll);
  
    app.use('/api/revision', router);
  };