module.exports = app => {
    const sendHistory = require("../controllers/sendHistoryController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Send History
    router.post("/", authenticateJWT,sendHistory.create);
  
    // Retrieve all Send Histories
    router.get("/", authenticateJWT,sendHistory.findAll);
  
    // Retrieve all published Send Histories
    router.get("/published", authenticateJWT,sendHistory.findAllPublished);
  
    // Retrieve a single Send History with id
    router.get("/:id", authenticateJWT,sendHistory.findOne);
  
    // Update a Send History with id
    router.put("/:id", authenticateJWT,sendHistory.update);
  
    // Delete a Send History with id
    router.delete("/:id", authenticateJWT,sendHistory.delete);
  
    // Delete all Send Histories
    router.delete("/", authenticateJWT,sendHistory.deleteAll);
  
    app.use('/api/send_history', router);
  };