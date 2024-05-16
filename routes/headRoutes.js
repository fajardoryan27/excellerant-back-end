module.exports = app => {
    const head = require("../controllers/headController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Head
    router.post("/", authenticateJWT,head.create);
  
    // Retrieve all Heads
    router.get("/", authenticateJWT,head.findAll);
  
    // Retrieve all published Heads
    router.get("/published", authenticateJWT,head.findAllPublished);
  
    // Retrieve a single Head with id
    router.get("/:id",authenticateJWT, head.findOne);
  
    // Update a Head with id
    router.put("/:id",authenticateJWT, head.update);
  
    // Delete a Head with id
    router.delete("/:id", authenticateJWT,head.delete);
  
    // Delete all Heads
    router.delete("/", authenticateJWT,head.deleteAll);
  
    app.use('/api/head', router);
  };