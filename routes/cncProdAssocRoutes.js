module.exports = app => {
    const cncProdAssocRoles = require("../controllers/cncProdAssocController.js");
    var router = require("express").Router();
  
    // Create a new Approval
    router.post("/", cncProdAssocRoles.create);
  
    // Retrieve all Approvals
    router.get("/", cncProdAssocRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", cncProdAssocRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", cncProdAssocRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", cncProdAssocRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", cncProdAssocRoles.delete);
  
    // Delete all Approvals
    router.delete("/", cncProdAssocRoles.deleteAll);
  
    app.use('/api/cncProdAssocRoles', router);
  };