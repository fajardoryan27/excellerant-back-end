const db = require("../models");
const moment = require("moment");
// const approvalList = require("../controllers/approvalListController.js");
const SendHistory = db.sendHistory;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.send_date)
    if (!req.body.program_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      var momentDate = moment("2014-09-15 09:00:00");
       console.log(momentDate.toDate()) 
       console.log(Date.parse(momentDate.toDate()))
      // Create a Tutorial
      const send_history = {
        program_id: req.body.program_id,
        revision_id: req.body.revision_id,
        sent_by: req.body.sent_by,
        machine_sent_to: req.body.machine_sent_to,
        head_sent_to: req.body.head_sent_to,
        // send_date:'1410742800000',
      };


      console.log(send_history)
    
      SendHistory.create(send_history)
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
    const program_id = req.query.program_id;
    var condition = program_id ? { program_id: { [Op.like]: `%${program_id}%` } } : null;
  
    SendHistory.findAll({ where: condition })
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    SendHistory.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    SendHistory.update(req.body, {
      where: { send_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    SendHistory.destroy({
        where: { send_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    SendHistory.destroy({
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
    SendHistory.findAll({ where: { published: true } })
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