const db = require("../../models");
const sql = require("mssql");
const CncProgramRevision = db.cncProgramRevision;
const Op = db.Sequelize.Op;
const config =  require("../../database");

// Connect to SQL Server
sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});

exports.create = (req, res) => {
    if (!req.body.revision_number) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
      
    
      var revision_number= req.body.revision_number
      var creation_date =localISOTime
      var revised_by =req.body.revised_by
      var revision_date= localISOTime
      var revision_notes= req.body.revision_notes
      var previous_file=req.body.previous_file
      var updated_file= req.body.updated_file

      new sql.Request().query("  insert into CNCRevisionListing values("+"'"+revision_number+"','"+creation_date+"',"+revised_by+","+"'"+revision_date+"',"+"'"+revision_notes+"',"+"'"+previous_file+"',"+"'"+updated_file+"')", (err, result) => {
     if (err) {
         console.error("Error executing query:", err);
     } else {
        res.status(201)
        res.send("CNC Revision Listing Successfully Created."); // Send query result as response
  
     }
 });
};

exports.findAll = (req, res) => {

    CncProgramRevision.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Permissions."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  CncProgramRevision.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Revision with id=" + id
      });
    });
};

// Update a Operations by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    CncProgramRevision.update(req.body, {
      where: { revision_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operations was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Operations with id=${id}. Maybe Operations was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Operations with id=" + id
        });
      });
};

// Delete a Operations with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    CncProgramRevision.destroy({
        where: { revision_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operations was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Operations with id=${id}. Maybe Operations was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Operations with id=" + id
        });
      });
};

// Delete all Operations from the database.
exports.deleteAll = (req, res) => {
    CncProgramRevision.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Operations were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Operations."
          });
        });
};

// Find all published Operations
exports.findAllPublished = (req, res) => {
    CncProgramRevision.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Operations."
      });
    });
};


// SQL Server configuration


