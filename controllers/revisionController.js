const db = require("../models");
const Revision = db.revision;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    console.log(req.body.revision_number)
    if (!req.body.revision_number) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Revision
      const revision = {
        revision_number: req.body.revision_number,
        created_by: req.body.created_by,
        creation_date: req.body.creation_date,
        revised_by: req.body.revised_by,
        revision_date: req.body.revision_date,
        revision_comment: req.body.revision_comment,
        database_path: req.body.database_path,
        status: req.body.status,
       
      };

      console.log(revision)
    
      Revision.create(revision)
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

// Retrieve all Revisions from the database.
exports.findAll = (req, res) => {
    const revision_number = req.query.revision_number;
    var condition = revision_number ? { revision_number: { [Op.like]: `%${revision_number}%` } } : null;
  
    Revision.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Revisions."
        });
      });
};

// Find a single Revision with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Revision.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Revision with id=" + id
        });
      });
};

// Update a Revision by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Revision.update(req.body, {
      where: { revision_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Revision was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Revision with id=${id}. Maybe Revision was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Revision with id=" + id + err
        });
      });
};

// Delete a Revision with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Revision.destroy({
        where: { revision_id: id }  
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Revision was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Revision with id=${id}. Maybe Revision was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Revision with id=" + id
        });
      });
};

// Delete all Revisions from the database.
exports.deleteAll = (req, res) => {
    Revision.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Revisions were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Revisions."
          });
        });
};

// Find all published Revisions
exports.findAllPublished = (req, res) => {
    Revision.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Revisions."
      });
    });
};