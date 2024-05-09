const db = require("../models");
const sql = require("mssql");
const Operations = db.operations;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    if (!req.body.part_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Operations
      const operations = {
        part_id: req.body.part_id,
        operation_name: req.body.operation_name,
        type: req.body.type,
      };

      console.log(operations)
    
      Operations.create(operations)
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

// Retrieve all Operations from the database.
exports.findAll = (req, res) => {
    const part_id = req.query.part_id;
    var condition = part_id ? { part_id: { [Op.like]: `%${part_id}%` } } : null;
  
    Operations.findAll({ where: condition })
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

// Find a single Operations with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Operations.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Operations with id=" + id
        });
      });
};

// Update a Operations by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Operations.update(req.body, {
      where: { operations_id: id }
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

    Operations.destroy({
        where: { part_id: id }  
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
    Operations.destroy({
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
    Operations.findAll({ where: { published: true } })
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

exports.get_all_op_per_part = (req, res) => {
  const part_name = req.query.part_name;
  console.log(part_name)
  // var condition = part_id ? { part_id: { [Op.like]: `%${part_id}%` } } : null;
  new sql.Request().query(" select Operations.operations_id,Parts.part_name,Operations.part_id,Operations.operation_name,Operations.type FROM Operations"+
 " inner join Parts on Parts.part_id = Operations.part_id where Parts.part_name = "+"'"+part_name+"'", (err, result) => {
    if (err) {
        console.error("Error executing query:", err);
    } else {
        res.send(result.recordset); // Send query result as response
        console.dir(result.recordset);
    }
});

  // Operations.findAll({ where: condition })
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving Operations."
  //     });
  //   });
};
