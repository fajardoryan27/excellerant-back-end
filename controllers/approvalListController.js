const db = require("../models");
const ApprovalList = db.approvalList;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  
    if (!req.body.programmer) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      // Create a Approval
      const approvalList = {
        programmer: req.body.programmer,
        engineer: req.body.engineer,
        quality: req.body.quality 
      };    
      ApprovalList.create(approvalList)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Approval List."
          });
        });
};

// Retrieve all Approval List from the database.
exports.findAll = (req, res) => {
    const Engineer = req.query.engineer;
    var condition = Engineer ? { Engineer: { [Op.like]: `%${Engineer}%` } } : null;
    ApprovalList.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Approval List."
        });
      });
};

// Find a single Approval List with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ApprovalList.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Approval List with id=" + id
        });
      });
};

// Update a Approval List by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ApprovalList.update(req.body, {
      where: { approval_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Approval List was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Approval List with id=${id}. Maybe Approval List was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Approval List with id=" + id
        });
      });
};

// Delete a Approval List with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ApprovalList.destroy({
      where: { approval_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Approval List was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Approval List with id=${id}. Maybe Approval List was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Approval List with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    ApprovalList.destroy({
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
    ApprovalList.findAll({ where: { published: true } })
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