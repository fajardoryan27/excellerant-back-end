module.exports = app => {
    const sendHistory = require("../controllers/sendHistoryController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", sendHistory.create);
  
    // Retrieve all Tutorials
    router.get("/", sendHistory.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", sendHistory.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", sendHistory.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", sendHistory.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", sendHistory.delete);
  
    // Delete all Tutorials
    router.delete("/", sendHistory.deleteAll);
  
    app.use('/api/send_history', router);
  };