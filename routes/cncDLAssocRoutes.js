module.exports = app => {
    const cncDLAssocRoles = require("../controllers/cncDLAssocController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Approval
    router.post("/", authenticateJWT, cncDLAssocRoles.create);
  
    // Retrieve all Approvals
    router.get("/", authenticateJWT, cncDLAssocRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", authenticateJWT, cncDLAssocRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", authenticateJWT, cncDLAssocRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", authenticateJWT, cncDLAssocRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", authenticateJWT, cncDLAssocRoles.delete);
  
    // Delete all Approvals
    router.delete("/", authenticateJWT, cncDLAssocRoles.deleteAll);
  
    app.use('/api/authenticateJWT', router);
  };