const db = require("../../models");
const PartNotes = db.partNotes;
const sql = require("mssql");
const config =  require("../../database");
const Op = db.Sequelize.Op;

// Connect to SQL Server
sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});

exports.create = (req, res) => {
    if (!req.body.part_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Part
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
      
      var  part_id =req.body.part_id
      var  date_added= localISOTime
      var  note_details =req.body.note_details
      var user_id=req.body.user_id


      new sql.Request().query("  insert into PartNotes values("+part_id+",'"+date_added+"','"+note_details+"',"+user_id+")", (err, result) => {
     if (err) {
         console.error("Error executing query:", err);
     } else {
        res.status(201)
        res.send("Part Notes Successfully Created."); // Send query result as response
  
     }
 });
};

// Retrieve all Parts from the database.
exports.findAll = (req, res) => {
    const part_name = req.query.part_name;
    var condition = part_name ? { part_name: { [Op.like]: `%${part_name}%` } } : null;
  
    PartNotes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Parts."
        });
      });
};

// Update a Part by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    PartNotes.update(req.body, {
      where: { part_notes_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Part was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Part with id=${id}. Maybe Part was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Part with id=" + id
        });
      });
};

// Delete a Part with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    PartNotes.destroy({
        where: { part_notes_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Part was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Part with id=${id}. Maybe Part was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Part with id=" + id
        });
      });
};

// Delete all Parts from the database.
exports.deleteAll = (req, res) => {
    PartNotes.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Parts were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Parts."
          });
        });
};
// Find a single Parts with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PartNotes.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Permission with id=" + id
      });
    });
};
// Find all published Parts
exports.findAllPublished = (req, res) => {
    PartNotes.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Parts."
      });
    });
};