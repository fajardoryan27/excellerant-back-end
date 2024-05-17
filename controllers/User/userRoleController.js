const db = require("../../models");
const UserRole = db.userrole;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.role_name)
    if (!req.body.role_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

      // Create a User Role
      const userole = {
        role_name: req.body.role_name,
        role_desc: req.body.role_desc
      };

      console.log(userole)
    
      UserRole.create(userole)
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

// Retrieve all User Roles from the database.
exports.findAll = (req, res) => {
    const role_name = req.query.role_name;
    var condition = role_name ? { role_name: { [Op.like]: `%${role_name}%` } } : null;
  
    UserRole.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User Roles."
        });
      });
};

// Find a single User Role with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    UserRole.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User Role with id=" + id
        });
      });
};

// Update a User Role by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    UserRole.update(req.body, {
      where: { role_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User Role was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User Role with id=${id}. Maybe User Role was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User Role with id=" + id
        });
      });
};

// Delete a User Role with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    UserRole.destroy({
        where: { role_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User Role was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User Role with id=${id}. Maybe User Role was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User Role with id=" + id
        });
      });
};

// Delete all User Roles from the database.
exports.deleteAll = (req, res) => {
    UserRole.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} User Roles were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all User Roles."
          });
        });
};

// Find all published User Roles
exports.findAllPublished = (req, res) => {
    UserRole.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User Roles."
      });
    });
};