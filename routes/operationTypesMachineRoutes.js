module.exports = app => {
    const operationTypeMach = require("../controllers/operationTypesMachineController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", operationTypeMach.create);
  
    // Retrieve all Tutorials
    router.get("/", operationTypeMach.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", operationTypeMach.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", operationTypeMach.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", operationTypeMach.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", operationTypeMach.delete);
  
    // Delete all Tutorials
    router.delete("/", operationTypeMach.deleteAll);
  
    app.use('/api/operation-machine-types', router);
  };