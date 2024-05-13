const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OperationsMachineTypes', {
    operations_machine_types_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    operations_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Operations',
        key: 'operations_id'
      }
    },
    machine_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MachineTypes',
        key: 'machine_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'OperationsMachineTypes',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Operatio__9B6302773A227473",
        unique: true,
        fields: [
          { name: "operations_machine_types_id" },
        ]
      },
    ]
  });
};
