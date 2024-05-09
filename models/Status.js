const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Status', {
    status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    development: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    production: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    obsolete: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Status',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Status__3683B53199512A2A",
        unique: true,
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
