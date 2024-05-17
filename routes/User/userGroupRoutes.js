module.exports = app => {
    const usergroups = require("../../controllers/User/userGroupsController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../../middleware/verifytoken.js");
    // Create a new User Group
    router.post("/", authenticateJWT,usergroups.create);
  
    // Retrieve all User Groups
    router.get("/", authenticateJWT,usergroups.findAll);
  
    // Retrieve all published User Groups
    router.get("/published", authenticateJWT,usergroups.findAllPublished);
  
    // Retrieve a single User Group with id
    router.get("/:id", authenticateJWT,usergroups.findOne);
  
    // Update a User Group with id
    router.put("/:id", authenticateJWT,usergroups.update);
  
    // Delete a User Group with id
    router.delete("/:id", authenticateJWT,usergroups.delete);
  
    // Delete all User Groups
    router.delete("/", authenticateJWT,usergroups.deleteAll);
  
    app.use('/api/usergroups', router);
  };