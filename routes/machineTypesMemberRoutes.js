module.exports = app => {
    const machine_types = require("../controllers/machineTypesMemberController.js");
    var router = require("express").Router();
  
    // Create a new Machine Type Member
    router.post("/", machine_types.create);
  
    // Retrieve all Machine Type Members
    router.get("/", machine_types.findAll);
  
    // Retrieve all published Machine Type Members
    router.get("/published", machine_types.findAllPublished);
  
    // Retrieve a single Machine Type Member with id
    router.get("/:id", machine_types.findOne);
  
    // Update a Machine Type Member with id
    router.put("/:id", machine_types.update);
  
    // Delete a Machine Type Member with id
    router.delete("/:id", machine_types.delete);
  
    // Delete all Machine Type Members
    router.delete("/", machine_types.deleteAll);
  
    app.use('/api/machine_types', router);
  };