module.exports = app => {
    const MachineDLStatUserRoles = require("../../controllers/Machines/MachineDLStatUserRolesController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Approval
    router.post("/", authenticateJWT,MachineDLStatUserRoles.create);
  
    // Retrieve all Approvals
    router.get("/", authenticateJWT,MachineDLStatUserRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published",authenticateJWT, MachineDLStatUserRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", authenticateJWT,MachineDLStatUserRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", authenticateJWT,MachineDLStatUserRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", authenticateJWT,MachineDLStatUserRoles.delete);
  
    // Delete all Approvals
    router.delete("/", authenticateJWT,MachineDLStatUserRoles.deleteAll);
  
    app.use('/api/MachineDLStatUserRoles', router);
  };