module.exports = app => {
    const status = require("../controllers/statusController.js");
    var router = require("express").Router();
  
    // Create a new Status
    router.post("/", status.create);
  
    // Retrieve all Statuses
    router.get("/", status.findAll);
  
    // Retrieve all published Statuses
    router.get("/published", status.findAllPublished);
  
    // Retrieve a single Status with id
    router.get("/:id", status.findOne);
  
    // Update a Status with id
    router.put("/:id", status.update);
  
    // Delete a Status with id
    router.delete("/:id", status.delete);
  
    // Delete all Statuses
    router.delete("/", status.deleteAll);
  
    app.use('/api/status', router);
  };