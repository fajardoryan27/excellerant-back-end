module.exports = app => {
    const parts = require("../../controllers/Machines/machineTypesController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Machine Type
    router.post("/", authenticateJWT,parts.create);
    router.post("/test", authenticateJWT,parts.create2);
    // Retrieve all Machine Types
    // router.get("/", parts.findAll);

    router.get("/ ",authenticateJWT, parts.getMachineTypeMachines);
    router.get("/machines/all", authenticateJWT,parts.getAllMachineTypeMachines);
    // Retrieve all published Machine Types
    router.get("/published", authenticateJWT,parts.findAllPublished);
  
    // Retrieve a single Machine Type with id
    router.get("/machines/:id", authenticateJWT,parts.findOneMach);
  
    // Update a Machine Type with id
    router.put("/:id",authenticateJWT, parts.update);

    // Update a Machine Type with id
    router.get("/:id", authenticateJWT,parts.findOne);
  
    // Delete a Machine Type with id
    router.delete("/:id", authenticateJWT,parts.delete);
  
    // Delete all Machine Types
    router.delete("/", authenticateJWT,parts.deleteAll);
  
    app.use('/api/machineTypes', router);
  };