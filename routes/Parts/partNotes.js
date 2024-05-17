module.exports = app => {
    const partNotes = require("../../controllers/Parts/partNotesController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Status
    router.post("/",authenticateJWT, partNotes.create);

    // Retrieve all Statuses
    router.get("/", authenticateJWT,partNotes.findAll);
  
    // Retrieve all published Statuses
    router.get("/published", authenticateJWT,partNotes.findAllPublished);
  
    // Retrieve a single Status with id
    router.get("/:id", authenticateJWT,partNotes.findOne);
  
    // Update a Status with id
    router.put("/:id", authenticateJWT,partNotes.update);
  
    // Delete a Status with id
    router.delete("/:id", authenticateJWT,partNotes.delete);
  
    // Delete all Statuses
    router.delete("/", authenticateJWT,partNotes.deleteAll);
  
    app.use('/api/partNotes', router);
  };