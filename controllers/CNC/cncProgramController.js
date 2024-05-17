const db = require("../../models");
const sql = require("mssql");
const config =  require("../../database");
const CncProgram = db.cncProgram;
const Op = db.Sequelize.Op;

sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});

exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.part_id)
    if (!req.body.part_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
      // Create a CNC Program
      
      var  part_id =req.body.part_id
      var operation_id= req.body.operation_id
      var  machine_type_id=req.body.machine_type_id
      var head_id= req.body.head_id
      var program_type= req.body.program_type
      var creation_date=localISOTime
      var program_file= req.body.program_file
      var revision_id= req.body.revision_id
      var  prod_status= req.body.prod_status
      var  dl_status= req.body.dl_status
      var  main_program_id= req.body.main_program_id


      new sql.Request().query("  insert into CNCProgram values("+part_id+","+operation_id+","+machine_type_id+","+head_id+","+program_type+","+"'"+creation_date+"','"+program_file+"',"+revision_id+","+prod_status+","+dl_status+","+main_program_id+")", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500)
        } else {
           res.status(201)
           res.send("CNC Program Successfully Created."); // Send query result as response
     
        }
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const part_id = req.query.part_id;
    var condition = part_id ? { part_id: { [Op.like]: `%${part_id}%` } } : null;
  
    CncProgram.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single CNC Program with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CncProgram.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving CNC Program with id=" + id
        });
      });
};

// Update a CNC Program by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    CncProgram.update(req.body, {
      where: { program_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "CNC Program was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update CNC Program with id=${id}. Maybe CNC Program was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating CNC Program with id=" + id + err
        });
      });
};

// Delete a CNC Program with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    CncProgram.destroy({
        where: { program_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "CNC Program was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete CNC Program with id=${id}. Maybe CNC Program was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete CNC Program with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    CncProgram.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Revision.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};