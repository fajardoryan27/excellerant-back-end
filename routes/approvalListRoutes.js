module.exports = app => {
    const approvalList = require("../controllers/approvalListController.js");
    var router = require("express").Router();
  
    // Create a new Approval
    router.post("/", approvalList.create);
  
    // Retrieve all Approvals
    router.get("/", approvalList.findAll);
  
    // Retrieve all published Approvals
    router.get("/published", approvalList.findAllPublished);
    // Retrieve a single Approval with id
    router.get("/:id", approvalList.findOne);
  
    // Update a Approval with id
    router.put("/:id", approvalList.update);
  
    // Delete a Approval with id
    router.delete("/:id", approvalList.delete);
  
    // Delete all Approvals
    router.delete("/", approvalList.deleteAll);
  
    app.use('/api/approvalList', router);
  };