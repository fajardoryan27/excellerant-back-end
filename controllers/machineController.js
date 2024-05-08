const db = require("../models");
const Machine = db.machine;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.machine_name)
    if (!req.body.machine_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Machine
      const machine = {
        machine_name: req.body.machine_name,
        number_of_heads: req.body.number_of_heads,
        head_id: req.body.head_id,
        details: req.body.details,
      };

      console.log(machine)
    
      Machine.create(machine)
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const machine_name = req.query.machine_name;
    var condition = machine_name ? { machine_name: { [Op.like]: `%${machine_name}%` } } : null;
  
    Machine.findAll({ where: condition })
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

// Find a single Machine with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Machine.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Machine with id=" + id
        });
      });
};

// Update a Machine by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Machine.update(req.body, {
      where: { machine_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Machine was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Machine with id=${id}. Maybe Machine was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Machine with id=" + id
        });
      });
};

// Delete a Machine with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Machine.destroy({
        where: { machine_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Machine was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Machine with id=${id}. Maybe Machine was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Machine with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Machine.destroy({
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
    Machine.findAll({ where: { published: true } })
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