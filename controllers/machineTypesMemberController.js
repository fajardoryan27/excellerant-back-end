const db = require("../models");
const MachineTypesMember = db.machine_types_member;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.machine_type_id)
    if (!req.body.machine_type_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Machine Types Member
      const machineTypesMember = {
        machine_type_id: req.body.machine_type_id,
        machine_id: req.body.machine_id
        
      };

      console.log(machineTypesMember)
    
      MachineTypesMember.create(machineTypesMember)
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

// Retrieve all Machine Types Member from the database.
exports.findAll = (req, res) => {
    const machine_type_id = req.query.machine_type_id;
    var condition = machine_type_id ? { machine_type_id: { [Op.like]: `%${machine_type_id}%` } } : null;
  
    MachineTypesMember.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Machine Types Member."
        });
      });
};

// Find a single Machine Types Member with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    MachineTypesMember.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Machine Types Member with id=" + id
        });
      });
};

// Update a Machine Types Member by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    MachineTypesMember.update(req.body, {
    where: { machine_types_member_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Machine Types Member was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Machine Types Member with id=${id}. Maybe Machine Types Member was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Machine Types Member with id=" + id
        });
      });
};

// Delete a Machine Types Member with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    MachineTypesMember.destroy({
    where: { machine_types_member_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Machine Types Member was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Machine Types Member with id=${id}. Maybe Machine Types Member was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Machine Types Member with id=" + id
        });
      });
};

// Delete all Machine Types Member from the database.
exports.deleteAll = (req, res) => {
        MachineTypesMember.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Machine Types Member were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Machine Types Member."
          });
        });
};

// Find all published Machine Types Member
exports.findAllPublished = (req, res) => {
    MachineTypesMember.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Machine Types Member."
      });
    });
};