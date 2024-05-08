module.exports = app => {
    const operationTypeMach = require("../controllers/operationTypesMachineController.js");
    var router = require("express").Router();
  
    // Create a new Operation Type
    router.post("/", operationTypeMach.create);
  
    // Retrieve all Operation Types
    router.get("/", operationTypeMach.findAll);
  
    // Retrieve all published Operation Types
    router.get("/published", operationTypeMach.findAllPublished);
  
    // Retrieve a single Operation Type with id
    router.get("/:id", operationTypeMach.findOne);
  
    // Update a Operation Type with id
    router.put("/:id", operationTypeMach.update);
  
    // Delete a Operation Type with id
    router.delete("/:id", operationTypeMach.delete);
  
    // Delete all Operation Types
    router.delete("/", operationTypeMach.deleteAll);
  
    app.use('/api/operation-machine-types', router);
  };