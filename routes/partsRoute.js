module.exports = app => {
    const parts = require("../controllers/partsController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Part
    router.post("/",authenticateJWT, parts.create);
  
    // Retrieve all Parts
    router.get("/", authenticateJWT,parts.findAll);
    router.get("/prodstatus/user-roles", authenticateJWT,parts.findAllPartProdStatRole);
    router.get("/dlstatus/user-roles",authenticateJWT, parts.findAllPartDLStatRole);
    router.get("/operations/machineTypes/CNCProgram/:id", authenticateJWT,parts.findAllPartAssoc);
    router.get("/:id", authenticateJWT,parts.findOne);
    // Retrieve all published Parts
    router.get("/published",authenticateJWT, parts.findAllPublished);
  
    // Update a Part with id
    router.put("/:id",authenticateJWT,parts.update);
  
    // Delete a Part with id
    router.delete("/:id", authenticateJWT,parts.delete);
  
    // Delete all Parts
    router.delete("/",authenticateJWT, parts.deleteAll);
  
    app.use('/api/parts', router);
  };