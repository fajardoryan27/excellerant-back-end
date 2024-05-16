module.exports = app => {
    const machine = require("../controllers/machineController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Machine
    router.post("/", authenticateJWT,machine.create);
  
    // Retrieve all Machines
    router.get("/",authenticateJWT, machine.findAll);
  
    // Retrieve all published Machines
    router.get("/published", authenticateJWT,machine.findAllPublished);
  
    // Retrieve a single Machine with id
    router.get("/:id",authenticateJWT, machine.findOne);
  
    // Update a Machine with id
    router.put("/:id",authenticateJWT, machine.update);
  
    // Delete a Machine with id
    router.delete("/:id", authenticateJWT,machine.delete);
  
    // Delete all Machines
    router.delete("/",authenticateJWT, machine.deleteAll);
  
    app.use('/api/machine', router);
  };