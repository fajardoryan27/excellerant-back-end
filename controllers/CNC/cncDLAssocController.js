const db = require("../../models");
const CNCDownloadAssocRoles = db.CNCDownloadAssocRoles;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.program_id)
    if (!req.body.program_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a CNC Program
      const cncDownloadAssocRoles = {
        program_id: req.body.program_id,
        role_id: req.body.role_id,
      };

    
      CNCDownloadAssocRoles.create(cncDownloadAssocRoles)
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
  
    CNCDownloadAssocRoles.findAll({ where: condition })
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

    CNCDownloadAssocRoles.findByPk(id)
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
    console.log(id)
    CNCDownloadAssocRoles.update(req.body, {
      where: { id: id }
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

    CncProgram.destroy({
        where: { id: id }  
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
    CNCDownloadAssocRoles.destroy({
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
    CNCDownloadAssocRoles.findAll({ where: { published: true } })
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