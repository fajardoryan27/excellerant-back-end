module.exports = app => {
    const permission = require("../controllers/permissionController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");
    // Create a new Permission
    router.post("/", authenticateJWT,permission.create);
  
    // Retrieve all Permissions
    router.get("/", authenticateJWT,permission.findAll);
  
    // Retrieve all published Permissions
    router.get("/published", authenticateJWT,permission.findAllPublished);
  
    // Retrieve a single Permission with id
    router.get("/:id", authenticateJWT,permission.findOne);
  
    // Update a Permission with id
    router.put("/:id", authenticateJWT,permission.update);
  
    // Delete a Permission with id
    router.delete("/:id", authenticateJWT,permission.delete);
  
    // Delete all Permissions
    router.delete("/", authenticateJWT,permission.deleteAll);
  
    app.use('/api/permission', router);
  };