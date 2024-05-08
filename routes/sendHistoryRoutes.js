module.exports = app => {
    const sendHistory = require("../controllers/sendHistoryController.js");
    var router = require("express").Router();
  
    // Create a new Send History
    router.post("/", sendHistory.create);
  
    // Retrieve all Send Histories
    router.get("/", sendHistory.findAll);
  
    // Retrieve all published Send Histories
    router.get("/published", sendHistory.findAllPublished);
  
    // Retrieve a single Send History with id
    router.get("/:id", sendHistory.findOne);
  
    // Update a Send History with id
    router.put("/:id", sendHistory.update);
  
    // Delete a Send History with id
    router.delete("/:id", sendHistory.delete);
  
    // Delete all Send Histories
    router.delete("/", sendHistory.deleteAll);
  
    app.use('/api/send_history', router);
  };