const db = require("../models");
const OperationsMachineType = db.operationsMachineTypes;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.operations_id)
    if (!req.body.operations_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Operation Types Machine
      const machineTypes = {
        operations_id: req.body.operations_id,
        machine_type_id: req.body.machine_type_id,
        
      };

      console.log(machineTypes)
    
      OperationsMachineType.create(machineTypes)
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

// Retrieve all Operation Types Machines from the database.
exports.findAll = (req, res) => {
    const operations_id = req.query.operations_id;
    var condition = operations_id ? { operations_id: { [Op.like]: `%${operations_id}%` } } : null;
  
    OperationsMachineType.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Operation Types Machines."
        });
      });
};

// Find a single Operation Types Machine with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    OperationsMachineType.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Operation Types Machine with id=" + id
        });
      });
};

// Update a Operation Types Machine by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    OperationsMachineType.update(req.body, {
      where: { operations_machine_types_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operation Types Machine was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Operation Types Machine with id=${id}. Maybe Operation Types Machine was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Operation Types Machine with id=" + id
        });
      });
};

// Delete a Operation Types Machine with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    OperationsMachineType.destroy({
        where: { operations_machine_types_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operation Types Machine was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Operation Types Machine with id=${id}. Maybe Operation Types Machine was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Operation Types Machine with id=" + id
        });
      });
};

// Delete all Operation Types Machines from the database.
exports.deleteAll = (req, res) => {
      OperationsMachineType.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Operation Types Machines were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Operation Types Machines."
          });
        });
};

// Find all published Operation Types Machines
exports.findAllPublished = (req, res) => {
    OperationsMachineType.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Operation Types Machines."
      });
    });
};