module.exports = app => {
    const approvalList = require("../controllers/approvalListController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", approvalList.create);
  
    // Retrieve all Tutorials
    router.get("/", approvalList.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", approvalList.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", approvalList.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", approvalList.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", approvalList.delete);
  
    // Delete all Tutorials
    router.delete("/", approvalList.deleteAll);
  
    app.use('/api/approvalList', router);
  };