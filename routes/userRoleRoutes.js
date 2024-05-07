module.exports = app => {
    const user_role = require("../controllers/userRoleController.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user_role.create);
  
    // Retrieve all Tutorials
    router.get("/", user_role.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", user_role.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", user_role.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", user_role.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", user_role.delete);
  
    // Delete all Tutorials
    router.delete("/", user_role.deleteAll);
  
    app.use('/api/user_role', router);
  };