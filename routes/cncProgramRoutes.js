module.exports = app => {
    const cncprogram = require("../controllers/cncProgramController.js");
    var router = require("express").Router();
  
    // Create a new CNC Program
    router.post("/", cncprogram.create);
  
    // Retrieve all CNC Program
    router.get("/", cncprogram.findAll);
  
    // Retrieve all published CNC Program
    router.get("/published", cncprogram.findAllPublished);
  
    // Retrieve a single CNC Program with id
    router.get("/:id", cncprogram.findOne);
  
    // Update a CNC Program with id
    router.put("/:id", cncprogram.update);
  
    // Delete a CNC Program with id
    router.delete("/:id", cncprogram.delete);
  
    // Delete all CNC Program
    router.delete("/", cncprogram.deleteAll);
  
    app.use('/api/cncprogram', router);
  };