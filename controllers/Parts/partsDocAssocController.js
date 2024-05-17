const db = require("../../models");
const PartDoc = db.partDoc;
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

      // Create a Send History
      const part_docs = {
        part_id: req.body.part_id,
        p_docs_location: req.body.p_docs_location,
      };

      console.log(part_docs)
    
      PartDoc.create(part_docs)
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

// Retrieve all Send History from the database.
exports.findAll = (req, res) => {
    const part_id = req.query.part_id;
    var condition = part_id ? { part_id: { [Op.like]: `%${part_id}%` } } : null;
  
    PartDoc.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Send History."
        });
      });
};

// Find a single Send History with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    PartDoc.findByPk(id)
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
    PartDoc.update(req.body, {
      where: { part_docs_id: id }
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

    PartDoc.destroy({
        where: { part_docs_id: id }  
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

// Delete all Send History from the database.
exports.deleteAll = (req, res) => {
    PartDoc.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Send History were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Send History."
          });
        });
};

// Find all published Send History
exports.findAllPublished = (req, res) => {
    PartDoc.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Send History."
      });
    });
};