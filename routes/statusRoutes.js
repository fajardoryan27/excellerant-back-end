module.exports = app => {
    const status = require("../controllers/statusController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Status
    router.post("/",authenticateJWT, status.create);
  
    // Retrieve all Statuses
    router.get("/", authenticateJWT,status.findAll);
  
    // Retrieve all published Statuses
    router.get("/published", authenticateJWT,status.findAllPublished);
  
    // Retrieve a single Status with id
    router.get("/:id", authenticateJWT,status.findOne);
  
    // Update a Status with id
    router.put("/:id", authenticateJWT,status.update);
  
    // Delete a Status with id
    router.delete("/:id", authenticateJWT,status.delete);
  
    // Delete all Statuses
    router.delete("/", authenticateJWT,status.deleteAll);
  
    app.use('/api/status', router);
  };