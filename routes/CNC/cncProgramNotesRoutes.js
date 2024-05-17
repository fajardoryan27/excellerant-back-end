module.exports = app => {
  const cncProgramNotes = require("../../controllers/CNC/cncProgramNotesController.js");
  var router = require("express").Router();
  const authenticateJWT  = require("../../middleware/verifytoken.js");
  // Create a new Approval
  router.post("/", authenticateJWT,cncProgramNotes.create);

  // Retrieve all Approvals
  router.get("/" ,authenticateJWT,cncProgramNotes.findAll);

  // Retrieve a single Approval with id
  router.get("/:id", authenticateJWT,cncProgramNotes.findOne);

  // Update a Approval with id
  router.put("/:id", authenticateJWT,cncProgramNotes.update);

  // Delete a Approval with id
  router.delete("/:id", authenticateJWT,cncProgramNotes.delete);

  // Delete all Approvals
  router.delete("/", authenticateJWT,cncProgramNotes.deleteAll);

  app.use('/api/cncProgramNotes', router);
};