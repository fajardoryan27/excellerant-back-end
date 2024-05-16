module.exports = app => {
    const cncProdAssocRoles = require("../controllers/cncProdAssocController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Approval
    router.post("/", authenticateJWT,cncProdAssocRoles.create);
  
    // Retrieve all Approvals
    router.get("/", authenticateJWT ,cncProdAssocRoles.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", authenticateJWT,cncProdAssocRoles.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", authenticateJWT,cncProdAssocRoles.findOne);
  
    // Update a Approval with id
    router.put("/:id", authenticateJWT,cncProdAssocRoles.update);
  
    // Delete a Approval with id
    router.delete("/:id", authenticateJWT,cncProdAssocRoles.delete);
  
    // Delete all Approvals
    router.delete("/", authenticateJWT,cncProdAssocRoles.deleteAll);
  
    app.use('/api/cncProdAssocRoles', router);
  };