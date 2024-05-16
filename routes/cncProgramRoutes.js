module.exports = app => {
    const cncprogram = require("../controllers/cncProgramController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new CNC Program
    router.post("/",authenticateJWT, cncprogram.create);
  
    // Retrieve all CNC Program
    router.get("/", authenticateJWT,cncprogram.findAll);
  
    // Retrieve all published CNC Program
    router.get("/published", authenticateJWT,cncprogram.findAllPublished);
  
    // Retrieve a single CNC Program with id
    router.get("/:id", authenticateJWT,cncprogram.findOne);
  
    // Update a CNC Program with id
    router.put("/:id", authenticateJWT,cncprogram.update);
  
    // Delete a CNC Program with id
    router.delete("/:id", authenticateJWT,cncprogram.delete);
  
    // Delete all CNC Program
    router.delete("/", authenticateJWT,cncprogram.deleteAll);
  
    app.use('/api/cncprogram', router);
  };