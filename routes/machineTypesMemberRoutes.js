module.exports = app => {
    const machine_types = require("../controllers/machineTypesMemberController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", machine_types.create);
  
    // Retrieve all Tutorials
    router.get("/", machine_types.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", machine_types.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", machine_types.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", machine_types.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", machine_types.delete);
  
    // Delete all Tutorials
    router.delete("/", machine_types.deleteAll);
  
    app.use('/api/machine_types', router);
  };