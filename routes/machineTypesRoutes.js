module.exports = app => {
    const parts = require("../controllers/machineTypesController.js");
    var router = require("express").Router();
  
    // Create a new Machine Type
    router.post("/", parts.create);

    // Retrieve all Machine Types
    router.get("/", parts.findAll);
    router.get("/ ", parts.getMachineTypeMachines);
    router.get("/machines/all", parts.getAllMachineTypeMachines);
    // Retrieve all published Machine Types
    router.get("/published", parts.findAllPublished);
  
    // Retrieve a single Machine Type with id
    router.get("/:id", parts.findOne);
  
    // Update a Machine Type with id
    router.put("/:id", parts.update);
  
    // Delete a Machine Type with id
    router.delete("/:id", parts.delete);
  
    // Delete all Machine Types
    router.delete("/", parts.deleteAll);
  
    app.use('/api/machineTypes', router);
  };