module.exports = app => {
    const usergroups = require("../controllers/userGroupsController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", usergroups.create);
  
    // Retrieve all Tutorials
    router.get("/", usergroups.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", usergroups.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", usergroups.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", usergroups.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", usergroups.delete);
  
    // Delete all Tutorials
    router.delete("/", usergroups.deleteAll);
  
    app.use('/api/usergroups', router);
  };