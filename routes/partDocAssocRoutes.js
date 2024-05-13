module.exports = app => {
    const partDocs = require("../controllers/partsDocAssocController.js");
    var router = require("express").Router();
  
    // Create a new Status
    router.post("/", partDocs.create);
  
    // Retrieve all Statuses
    router.get("/", partDocs.findAll);
  
    // Retrieve all published Statuses
    router.get("/published", partDocs.findAllPublished);
  
    // Retrieve a single Status with id
    router.get("/:id", partDocs.findOne);
  
    // Update a Status with id
    router.put("/:id", partDocs.update);
  
    // Delete a Status with id
    router.delete("/:id", partDocs.delete);
  
    // Delete all Statuses
    router.delete("/", partDocs.deleteAll);
  
    app.use('/api/AddPartDocs', router);
  };