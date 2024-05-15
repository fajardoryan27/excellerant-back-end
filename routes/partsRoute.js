module.exports = app => {
    const parts = require("../controllers/partsController.js");
    var router = require("express").Router();
  
    // Create a new Part
    router.post("/", parts.create);
  
    // Retrieve all Parts
    router.get("/", parts.findAll);
    router.get("/prodstatus/user-roles", parts.findAllPartProdStatRole);
    router.get("/dlstatus/user-roles", parts.findAllPartDLStatRole);
    router.get("/operations/machineTypes/CNCProgram/:id", parts.findAllPartAssoc);
    router.get("/:id", parts.findOne);
    // Retrieve all published Parts
    router.get("/published", parts.findAllPublished);
  
    // Update a Part with id
    router.put("/:id", parts.update);
  
    // Delete a Part with id
    router.delete("/:id", parts.delete);
  
    // Delete all Parts
    router.delete("/", parts.deleteAll);
  
    app.use('/api/parts', router);
  };