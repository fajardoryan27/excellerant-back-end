module.exports = app => {
    const MachineDLStatUserRoles = require("../controllers/MachineDLStatUserRolesController.js");
    var router = require("express").Router();
  
    // Create a new Approval
    router.post("/", MachineDLStatUserRoles.create);
  
    // Retrieve all Approvals
    router.get("/", MachineDLStatUserRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", MachineDLStatUserRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", MachineDLStatUserRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", MachineDLStatUserRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", MachineDLStatUserRoles.delete);
  
    // Delete all Approvals
    router.delete("/", MachineDLStatUserRoles.deleteAll);
  
    app.use('/api/MachineDLStatUserRoles', router);
  };