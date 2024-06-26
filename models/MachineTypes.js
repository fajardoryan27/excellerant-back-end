const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MachineTypes', {
    machine_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    machine_type_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MachineTypes',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__MachineT__715BF72A25CCC7D4",
        unique: true,
        fields: [
          { name: "machine_type_id" },
        ]
      },
      {
        name: "PK__MachineT__715BF72AC75C739A",
        unique: true,
        fields: [
          { name: "machine_type_id" },
        ]
      },
    ]
  });
};
