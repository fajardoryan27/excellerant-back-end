module.exports = app => {
    const PartsProdUserRoles = require("../../controllers/Parts/PartsProdUserRolesController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new Approval
    router.post("/",authenticateJWT, PartsProdUserRoles.create);
  
    // Retrieve all Approvals
    router.get("/",authenticateJWT, PartsProdUserRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", authenticateJWT,PartsProdUserRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", authenticateJWT,PartsProdUserRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id",authenticateJWT, PartsProdUserRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", authenticateJWT,PartsProdUserRoles.delete);
  
    // Delete all Approvals
    router.delete("/", authenticateJWT,PartsProdUserRoles.deleteAll);
  
    app.use('/api/PartsProdUserRoles', router);
  };