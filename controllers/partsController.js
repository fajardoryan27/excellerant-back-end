const db = require("../models");
const Parts = db.parts;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.part_name)
    if (!req.body.part_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Part
      const parts = {
        part_name: req.body.part_name,
        approval_requirements: req.body.approval_requirements,
        description: req.body.description,
        itar_restricted: req.body.itar_restricted,
        revision_number: req.body.revision_number,
        part_authorization_type:req.body.part_authorization_type,
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

// Find a single Part with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Parts.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Part with id=" + id
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