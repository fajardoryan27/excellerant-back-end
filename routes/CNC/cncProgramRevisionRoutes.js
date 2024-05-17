module.exports = app => {
    const cncProgramRevision = require("../../controllers/CNC/cncProgramRevisionController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Approval
    router.post("/", authenticateJWT,cncProgramRevision.create);
  
    // Retrieve all Approvals
    router.get("/" ,authenticateJWT,cncProgramRevision.findAll);
  
    // Retrieve a single Approval with id
    router.get("/:id", authenticateJWT,cncProgramRevision.findOne);
  
    // Update a Approval with id
    router.put("/:id", authenticateJWT,cncProgramRevision.update);
  
    // Delete a Approval with id
    router.delete("/:id", authenticateJWT,cncProgramRevision.delete);
  
    // Delete all Approvals
    router.delete("/", authenticateJWT,cncProgramRevision.deleteAll);
  
    app.use('/api/cncProgramRevision', router);
  };