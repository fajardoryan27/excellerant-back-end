module.exports = app => {
    const auth = require("../controllers/autController.js");
    var router = require("express").Router();
    const authenticateJWT  = require("../middleware/verifytoken.js");

  
    // Create a new Approval
    router.post("/login", auth.generateToken);
  
    // // Retrieve all Approvals
    router.get("/", auth.verifyToken);

    // router.get("/as",authenticateJWT, auth.test);


  
    // // Retrieve all published Approvals
    // router.get("/published", auth.findAllPublished);
    // // Retrieve a single Approval with id
    // router.get("/:id", auth.findOne);
  
    // // Update a Approval with id
    // router.put("/:id", auth.update);
  
    // // Delete a Approval with id
    // router.delete("/:id", auth.delete);
  
    // // Delete all Approvals
    // router.delete("/", auth.deleteAll);
  
    app.use('/api/auth', router);
  };