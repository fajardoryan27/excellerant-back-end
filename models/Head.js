const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Head', {
    head_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    head_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Head',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Head__D6BE0713352BAE72",
        unique: true,
        fields: [
          { name: "head_id" },
        ]
      },
      {
        name: "PK__Head__D6BE0713C4934048",
        unique: true,
        fields: [
          { name: "head_id" },
        ]
      },
    ]
  });
};
