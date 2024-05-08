const db = require("../models");
const Head = db.head;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.head_name)
    if (!req.body.head_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Head
      const head = {
        head_name: req.body.head_name,
        destination: req.body.destination,
       
      };

      console.log(head)
    
      Head.create(head)
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
    const head_name = req.query.head_name;
    var condition = head_name ? { head_name: { [Op.like]: `%${head_name}%` } } : null;
  
    Head.findAll({ where: condition })
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

// Find a single Head with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Head.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Head with id=" + id
        });
      });
};

// Update a Head by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Head.update(req.body, {
      where: { head_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Head was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Head with id=${id}. Maybe Head was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Head with id=" + id
        });
      });
};

// Delete a Head with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Head.destroy({
        where: { head_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Head was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Head with id=${id}. Maybe Head was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Head with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Head.destroy({
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
    Head.findAll({ where: { published: true } })
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