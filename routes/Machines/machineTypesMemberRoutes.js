module.exports = app => {
    const machine_types = require("../../controllers/Machines/machineTypesMemberController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Machine Type Member
    router.post("/", authenticateJWT,machine_types.create);
  
    // Retrieve all Machine Type Members
    router.get("/", authenticateJWT,machine_types.findAll);
  
    // Retrieve all published Machine Type Members
    router.get("/published", authenticateJWT,machine_types.findAllPublished);
  
    // Retrieve a single Machine Type Member with id
    router.get("/:id",authenticateJWT, machine_types.findOne);
  
    // Update a Machine Type Member with id
    router.put("/:id",authenticateJWT, machine_types.update);
  
    // Delete a Machine Type Member with id
    router.delete("/:id", authenticateJWT,machine_types.delete);
  
    // Delete all Machine Type Members
    router.delete("/", authenticateJWT,machine_types.deleteAll);
  
    app.use('/api/machine_types', router);
  };