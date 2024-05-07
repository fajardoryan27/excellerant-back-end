module.exports = app => {
    const cncprogram = require("../controllers/cncProgramController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cncprogram.create);
  
    // Retrieve all Tutorials
    router.get("/", cncprogram.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cncprogram.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cncprogram.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cncprogram.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cncprogram.delete);
  
    // Delete all Tutorials
    router.delete("/", cncprogram.deleteAll);
  
    app.use('/api/cncprogram', router);
  };