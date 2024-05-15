module.exports = app => {
    const cncDLAssocRoles = require("../controllers/cncDLAssocController.js");
    var router = require("express").Router();
  
    // Create a new Approval
    router.post("/", cncDLAssocRoles.create);
  
    // Retrieve all Approvals
    router.get("/", cncDLAssocRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", cncDLAssocRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", cncDLAssocRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", cncDLAssocRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", cncDLAssocRoles.delete);
  
    // Delete all Approvals
    router.delete("/", cncDLAssocRoles.deleteAll);
  
    app.use('/api/cncDLAssocRoles', router);
  };