module.exports = app => {
    const revisions = require("../controllers/revisionController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Revision
    router.post("/",authenticateJWT, revisions.create);
  
    // Retrieve all Revisions
    router.get("/", authenticateJWT,revisions.findAll);
  
    // Retrieve all published Revisions
    router.get("/published", authenticateJWT,revisions.findAllPublished);
  
    // Retrieve a single Revision with id
    router.get("/:id", authenticateJWT,revisions.findOne);
  
    // Update a Revision with id
    router.put("/:id", authenticateJWT,revisions.update);
  
    // Delete a Revision with id
    router.delete("/:id", authenticateJWT,revisions.delete);
  
    // Delete all Revisions
    router.delete("/", authenticateJWT,revisions.deleteAll);
  
    app.use('/api/revision', router);
  };