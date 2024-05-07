const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Machines', {
    machine_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    number_of_heads: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Head',
        key: 'head_id'
      }
    },
    details: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Machines',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Machines__7B75BEA987A2AB3E",
        unique: true,
        fields: [
          { name: "machine_id" },
        ]
      },
    ]
  });
};
