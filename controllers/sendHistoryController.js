const db = require("../models");
const sql = require("mssql");
const SendHistory = db.sendHistory;
const Op = db.Sequelize.Op;
const config =  require("../database");
sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});

exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.send_date)
    if (!req.body.program_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
      // Create a Send History
      
      var  program_id =req.body.program_id
      var  revision_id =req.body.revision_id
      var  sent_by =req.body.sent_by
      var  machine_sent_to =req.body.machine_sent_to
      var  head_sent_to= req.body.head_sent_to
      var send_date=localISOTime
      new sql.Request().query("  insert into SendHistory values("+program_id+","+revision_id+","+sent_by+","+machine_sent_to+","+head_sent_to+","+"'"+send_date+"')", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
           res.status(201)
           res.send("History Successfully Created."); // Send query result as response
     
        }
    });
};

// Retrieve all Send Histories from the database.
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
            err.message || "Some error occurred while retrieving Send Histories."
        });
      });
};

// Find a single Send History with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    SendHistory.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Send History with id=" + id
        });
      });
};

// Update a Send History by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    SendHistory.update(req.body, {
      where: { send_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Send History was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Send History with id=${id}. Maybe Send History was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Send History with id=" + id
        });
      });
};

// Delete a Send History with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    SendHistory.destroy({
        where: { send_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Send History was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Send History with id=${id}. Maybe Send History was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Send History with id=" + id
        });
      });
};

// Delete all Send Histories from the database.
exports.deleteAll = (req, res) => {
    SendHistory.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Send Histories were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Send Histories."
          });
        });
};

// Find all published Send Histories
exports.findAllPublished = (req, res) => {
    SendHistory.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Send Histories."
      });
    });
};