const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MachineTypesMember', {
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
    tableName: 'MachineTypesMember',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__MachineT__84CBFB697CD71658",
        unique: true,
        fields: [
          { name: "machine_types_member_id" },
        ]
      },
      {
        name: "PK__MachineT__84CBFB69806F6694",
        unique: true,
        fields: [
          { name: "machine_types_member_id" },
        ]
      },
    ]
  });
};
