const db = require("../models");
const UserRolePermission = db.userrole_permission;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.permission_id)
    if (!req.body.permission_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

      // Create a User Role Permission
      const userole_permission = {
        permission_id: req.body.permission_id,
        role_id: req.body.role_id
      };

      console.log(userole_permission)
    
      UserRolePermission.create(userole_permission)
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

// Retrieve all User Role Permissions from the database.
exports.findAll = (req, res) => {
    const permission_id = req.query.permission_id;
    var condition = permission_id ? { permission_id: { [Op.like]: `%${permission_id}%` } } : null;
  
    UserRolePermission.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User Role Permissions."
        });
      });
};

// Find a single User Role Permission with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    UserRolePermission.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User Role Permission with id=" + id
        });
      });
};

// Update a User Role Permission by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    UserRolePermission.update(req.body, {
      where: { user_role_prmsn_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User Role Permission was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User Role Permission with id=${id}. Maybe User Role Permission was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User Role Permission with id=" + id
        });
      });
};

// Delete a User Role Permission with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    UserRolePermission.destroy({
        where: { user_role_prmsn_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User Role Permission was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User Role Permission with id=${id}. Maybe User Role Permission was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User Role Permission with id=" + id
        });
      });
};

// Delete all User Role Permissions from the database.
exports.deleteAll = (req, res) => {
    UserRolePermission.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} User Role Permissions were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all User Role Permissions."
          });
        });
};

// Find all published User Role Permissions
exports.findAllPublished = (req, res) => {
    UserRolePermission.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User Role Permissions."
      });
    });
};