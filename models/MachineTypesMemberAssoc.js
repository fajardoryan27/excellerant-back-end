const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MachineTypesMemberAssoc', {
    machine_types_member_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MachineTypes',
        key: 'machine_type_id'
      }
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
    tableName: 'MachineTypesMemberAssoc',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__MachineT__84CBFB6908F4A307",
        unique: true,
        fields: [
          { name: "machine_types_member_id" },
        ]
      },
    ]
  });
};
