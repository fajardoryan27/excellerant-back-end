module.exports = app => {
    const usergroups = require("../controllers/userGroupsController.js");
    var router = require("express").Router();
  
    // Create a new User Group
    router.post("/", usergroups.create);
  
    // Retrieve all User Groups
    router.get("/", usergroups.findAll);
  
    // Retrieve all published User Groups
    router.get("/published", usergroups.findAllPublished);
  
    // Retrieve a single User Group with id
    router.get("/:id", usergroups.findOne);
  
    // Update a User Group with id
    router.put("/:id", usergroups.update);
  
    // Delete a User Group with id
    router.delete("/:id", usergroups.delete);
  
    // Delete all User Groups
    router.delete("/", usergroups.deleteAll);
  
    app.use('/api/usergroups', router);
  };