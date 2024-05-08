const db = require("../models");
const UserGroups = db.usergroups;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.group_name)
    if (!req.body.group_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

      // Create a User Group
      const usergroups = {
        group_name: req.body.group_name,
        group_permission: req.body.group_permission
      };

      console.log(usergroups)
    
      UserGroups.create(usergroups)
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

// Retrieve all User Groups from the database.
exports.findAll = (req, res) => {
    const group_name = req.query.group_name;
    var condition = group_name ? { group_name: { [Op.like]: `%${group_name}%` } } : null;
  
    UserGroups.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User Groups."
        });
      });
};

// Find a single User Group with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    UserGroups.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User Group with id=" + id
        });
      });
};

// Update a User Group by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    UserGroups.update(req.body, {
      where: { group_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User Group was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User Group with id=${id}. Maybe User Group was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User Group with id=" + id
        });
      });
};

// Delete a User Group with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    UserGroups.destroy({
        where: { group_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User Group was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User Group with id=${id}. Maybe User Group was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User Group with id=" + id
        });
      });
};

// Delete all User Groups from the database.
exports.deleteAll = (req, res) => {
    UserGroups.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} User Groups were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all User Groups."
          });
        });
};

// Find all published User Groups
exports.findAllPublished = (req, res) => {
    UserGroups.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User Groups."
      });
    });
};