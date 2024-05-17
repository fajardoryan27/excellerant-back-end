module.exports = app => {
    const partDocs = require("../../controllers/Parts/partsDocAssocController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Status
    router.post("/",authenticateJWT,partDocs.create);

    // Retrieve all Statuses
    router.get("/", authenticateJWT,partDocs.findAll);
  
    // Retrieve all published Statuses
    router.get("/published", authenticateJWT,partDocs.findAllPublished);
  
    // Retrieve a single Status with id
    router.get("/:id", authenticateJWT,partDocs.findOne);
  
    // Update a Status with id
    router.put("/:id", authenticateJWT,partDocs.update);
  
    // Delete a Status with id
    router.delete("/:id", authenticateJWT,partDocs.delete);
  
    // Delete all Statuses
    router.delete("/", authenticateJWT,partDocs.deleteAll);
  
    app.use('/api/AddPartDocs', router);
  };