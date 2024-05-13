const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNCRevisionListing', {
    revision_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    revision_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    revised_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    revision_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    revision_notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    previous_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CNCRevisionListing',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__CNCRevis__03BAF005CAD6274A",
        unique: true,
        fields: [
          { name: "revision_id" },
        ]
      },
    ]
  });
};
