module.exports = app => {
    const operationTypeMach = require("../../controllers/Operations/operationTypesMachineController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Operation Type
    router.post("/", authenticateJWT,operationTypeMach.create);
  
    // Retrieve all Operation Types
    router.get("/", authenticateJWT,operationTypeMach.findAll);
  
    // Retrieve all published Operation Types
    router.get("/published", authenticateJWT,operationTypeMach.findAllPublished);
  
    // Retrieve a single Operation Type with id
    router.get("/:id", authenticateJWT,operationTypeMach.findOne);
  
    // Update a Operation Type with id
    router.put("/:id", authenticateJWT,operationTypeMach.update);
  
    // Delete a Operation Type with id
    router.delete("/:id", authenticateJWT,operationTypeMach.delete);
  
    // Delete all Operation Types
    router.delete("/", authenticateJWT,operationTypeMach.deleteAll);
  
    app.use('/api/operation-machine-types', router);
  };