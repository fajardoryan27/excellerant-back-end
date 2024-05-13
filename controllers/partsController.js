const db = require("../models");
const Parts = db.parts;
const sql = require("mssql");
const config =  require("../database");
const Op = db.Sequelize.Op;

// Connect to SQL Server
sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});

exports.create = (req, res) => {
    if (!req.body.part_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Part
      const parts = {
        part_name: req.body.part_name,
        description: req.body.description,
        part_revision: req.body.part_revision,
      };

      console.log(parts)
    
      Parts.create(parts)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              console.log(err.message) 
          });
        });
};

exports.findAllPartAssoc = (req, res) => {
  const id = req.params.id;
  new sql.Request().query("  select Parts.part_id,Parts.part_name,Parts.part_revision,Parts.description,Operations.operations_id,Operations.operation_name,CNCProgram.program_id"+
  ",CNCProgram.machine_type_id,CNCProgram.head_id,CNCProgram.program_type,CNCProgram.creation_date,CNCProgram.program_file,CNCProgram.revision_id,CNCProgram.prod_status,CNCProgram.dl_status,CNCProgram.main_program_id"+
  ",MachineTypes.machine_type_name,MachineTypes.machine_type_desc "+
  "from Operations "+
  "full join CNCProgram on Operations.operations_id = CNCProgram.operation_id "+
  "full join MachineTypes on CNCProgram.machine_type_id = MachineTypes.machine_type_id "+
  "full join Parts on Parts.part_id = Operations.part_id "+
  "where Parts.part_id IS NOT NULL and Parts.part_id  ="+id, (err, result) => {
     if (err) {
         console.error("Error executing query:", err);
     } else {
         res.send(result.recordset); // Send query result as response
         console.dir(result.recordset);
     }
 });
};

// Retrieve all Parts from the database.
exports.findAll = (req, res) => {
    const part_name = req.query.part_name;
    var condition = part_name ? { part_name: { [Op.like]: `%${part_name}%` } } : null;
  
    Parts.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Parts."
        });
      });
};

// Update a Part by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Parts.update(req.body, {
      where: { part_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Part was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Part with id=${id}. Maybe Part was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Part with id=" + id
        });
      });
};

// Delete a Part with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Parts.destroy({
        where: { part_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Part was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Part with id=${id}. Maybe Part was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Part with id=" + id
        });
      });
};

// Delete all Parts from the database.
exports.deleteAll = (req, res) => {
    Parts.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Parts were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Parts."
          });
        });
};
// Find a single Parts with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Parts.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Permission with id=" + id
      });
    });
};
// Find all published Parts
exports.findAllPublished = (req, res) => {
    Parts.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Parts."
      });
    });
};