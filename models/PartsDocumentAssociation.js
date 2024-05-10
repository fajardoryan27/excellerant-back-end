const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PartsDocumentAssociation', {
    part_docs_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    part_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Parts',
        key: 'part_id'
      }
    },
    p_docs_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PartsDocumentAssociation',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__PartsDoc__95227D82CD0BDFA9",
        unique: true,
        fields: [
          { name: "part_docs_id" },
        ]
      },
    ]
  });
};
