const db = require("../../models");
const MachineDLStatUserRoles = db.machineDLStatUserRoles;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.part_id)
    if (!req.body.part_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a CNC Program
      const machineDLStatUserRoles = {
        part_id: req.body.part_id,
        role_id: req.body.role_id,
        part_authorization_type:req.body.part_authorization_type,
        required_num_users:req.body.required_num_users
      };

    
      MachineDLStatUserRoles.create(machineDLStatUserRoles)
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
    const part_id = req.query.part_id;
    var condition = part_id ? { part_id: { [Op.like]: `%${part_id}%` } } : null;
  
    MachineDLStatUserRoles.findAll({ where: condition })
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

// Find a single CNC Program with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    MachineDLStatUserRoles.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving CNC Program with id=" + id
        });
      });
};

// Update a CNC Program by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    
    MachineDLStatUserRoles.update(req.body, {
      where: { machine_stat_user_role_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "CNC Program was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update CNC Program with id=${id}. Maybe CNC Program was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating CNC Program with id=" + id + err
        });
      });
};

// Delete a CNC Program with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    MachineDLStatUserRoles.destroy({
        where: { machine_stat_user_role_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "CNC Program was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete CNC Program with id=${id}. Maybe CNC Program was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete CNC Program with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    MachineDLStatUserRoles.destroy({
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
    MachineDLStatUserRoles.findAll({ where: { published: true } })
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