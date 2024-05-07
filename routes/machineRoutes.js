module.exports = app => {
    const machine = require("../controllers/machineController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", machine.create);
  
    // Retrieve all Tutorials
    router.get("/", machine.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", machine.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", machine.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", machine.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", machine.delete);
  
    // Delete all Tutorials
    router.delete("/", machine.deleteAll);
  
    app.use('/api/machine', router);
  };