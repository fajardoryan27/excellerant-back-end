const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MachineHeadAssoc', {
    head_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    head_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    machine_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Machines',
        key: 'machine_id'
      }
    }
  }, {
    sequelize,
    tableName: 'MachineHeadAssoc',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__MachineH__D6BE071398D81966",
        unique: true,
        fields: [
          { name: "head_id" },
        ]
      },
    ]
  });
};
