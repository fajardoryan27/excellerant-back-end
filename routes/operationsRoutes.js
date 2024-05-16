module.exports = app => {
    const operations = require("../controllers/operationsController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Operation
    router.post("/", authenticateJWT,operations.create);
    router.get("/", authenticateJWT,operations.findAll);
    // Retrieve all Operations
    
    router.get("/machineTypes/CNCProgram/:id", authenticateJWT,operations.findOneMachCNCProg);
    router.get("/parts/:id", authenticateJWT,operations.findOneAssoc);
    // Retrieve all published Operations
    router.get("/published", authenticateJWT,operations.findAllPublished);
  
    // Retrieve a single Operation with id
    router.get("/:id", authenticateJWT,operations.findOne);
  
    // Update a Operation with id
    router.put("/:id", authenticateJWT,operations.update);
  
    // Delete a Operation with id
    router.delete("/:id", authenticateJWT,operations.delete);
  
    // Delete all Operations
    router.delete("/", authenticateJWT,operations.deleteAll);
    
    

    app.use('/api/operations', router);
  };