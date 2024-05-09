const db = require("../models");
const MachineTypes = db.machineTypes;
const Op = db.Sequelize.Op;
const sql = require("mssql");

// SQL Server configuration
var config = {
  "user": "sa", // Database username
  "password": "p@ssw0rd", // Database password
  "server": "localhost", // Server IP address
  "database": "nexaDB", // Database name
  "options": {
      "encrypt": false // Disable encryption
  }
}

// Connect to SQL Server
sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.machine_type_name)
    if (!req.body.machine_type_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Machine Types
      const machineTypes = {
        machine_type_name: req.body.machine_type_name,
        machine_type_desc:req.body.machine_type_desc
      };

      console.log(machineTypes)
    
      MachineTypes.create(machineTypes)
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

exports.getAllMachineTypeMachines = (req, res) => {
  const machine_type_name = req.query.machine_type_name;
  var condition = machine_type_name ? { machine_type_name: { [Op.like]: `%${machine_type_name}%` } } : null;

  new sql.Request().query("  select MachineTypes.machine_type_id,MachineTypes.machine_type_name,Machines.machine_name,MachineTypes.machine_type_desc from MachineTypes "+
  "inner join Machines on Machines.machine_type_id = MachineTypes.machine_type_id", (err, result) => {
    if (err) {
        console.error("Error executing query:", err);
    } else {
        res.send(result.recordset); // Send query result as response
        console.dir(result.recordset);
    }
});
};

exports.getMachineTypeMachines = (req, res) => {
  const machine_type_name = req.query.machine_type_name;
  var condition = machine_type_name ? { machine_type_name: { [Op.like]: `%${machine_type_name}%` } } : null;

  new sql.Request().query("  select MachineTypes.machine_type_id,MachineTypes.machine_type_name,Machines.machine_name,MachineTypes.machine_type_desc from MachineTypes "+
  "inner join Machines on Machines.machine_type_id = MachineTypes.machine_type_id where MachineTypes.machine_type_name = "+"'"+machine_type_name+"'", (err, result) => {
    if (err) {
        console.error("Error executing query:", err);
    } else {
        res.send(result.recordset); // Send query result as response
        console.dir(result.recordset);
    }
});
};

// Retrieve all Machine Types from the database.
exports.findAll = (req, res) => {
    const machine_type_name = req.query.machine_type_name;
    var condition = machine_type_name ? { machine_type_name: { [Op.like]: `%${machine_type_name}%` } } : null;
  
    MachineTypes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Machine Types."
        });
      });
};

// Find a single Machine Types with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    MachineTypes.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Machine Types with id=" + id
        });
      });
};

// Update a Machine Types by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    MachineTypes.update(req.body, {
      where: { machine_type_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Machine Types was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Machine Types with id=${id}. Maybe Machine Types was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Machine Types with id=" + id
        });
      });
};

// Delete a Machine Types with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    MachineTypes.destroy({
        where: { machine_type_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Machine Types was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Machine Types with id=${id}. Maybe Machine Types was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Machine Types with id=" + id
        });
      });
};

// Delete all Machine Types from the database.
exports.deleteAll = (req, res) => {
    MachineTypes.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Machine Types were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Machine Types."
          });
        });
};

// Find all published Machine Types
exports.findAllPublished = (req, res) => {
    MachineTypes.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Machine Types."
      });
    });
};