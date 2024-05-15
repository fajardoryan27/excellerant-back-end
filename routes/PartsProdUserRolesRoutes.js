module.exports = app => {
    const PartsProdUserRoles = require("../controllers/PartsProdUserRolesController.js");
    var router = require("express").Router();
  
    // Create a new Approval
    router.post("/", PartsProdUserRoles.create);
  
    // Retrieve all Approvals
    router.get("/", PartsProdUserRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", PartsProdUserRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", PartsProdUserRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", PartsProdUserRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", PartsProdUserRoles.delete);
  
    // Delete all Approvals
    router.delete("/", PartsProdUserRoles.deleteAll);
  
    app.use('/api/PartsProdUserRoles', router);
  };