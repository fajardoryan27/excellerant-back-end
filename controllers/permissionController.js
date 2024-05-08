const db = require("../models");
const Permission = db.permission;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.permission_name)
    if (!req.body.permission_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

      // Create a Permission
      const permission = {
        permission_name: req.body.permission_name,
        permission_desc: req.body.permission_desc
      };

      console.log(permission)
    
      Permission.create(permission)
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

// Retrieve all Permissions from the database.
exports.findAll = (req, res) => {
    const permission_name = req.query.permission_name;
    var condition = permission_name ? { permission_name: { [Op.like]: `%${permission_name}%` } } : null;
  
    Permission.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Permissions."
        });
      });
};

// Find a single Permission with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Permission.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Permission with id=" + id
        });
      });
};

// Update a Permission by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Permission.update(req.body, {
      where: { permission_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Permission was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Permission with id=${id}. Maybe Permission was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Permission with id=" + id
        });
      });
};

// Delete a Permission with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Permission.destroy({
        where: { permission_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Permission was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Permission with id=${id}. Maybe Permission was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Permission with id=" + id
        });
      });
};

// Delete all Permissions from the database.
exports.deleteAll = (req, res) => {
    Permission.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Permissions were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Permissions."
          });
        });
};

// Find all published Permissions
exports.findAllPublished = (req, res) => {
    Permission.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Permissions."
      });
    });
};