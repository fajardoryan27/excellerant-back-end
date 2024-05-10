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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    machine_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MachineTypes',
        key: 'machine_type_id'
      }
    },
    machine_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_of_heads: {
      type: DataTypes.INTEGER,
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
        name: "PK__Machines__7B75BEA9B5970AB8",
        unique: true,
        fields: [
          { name: "machine_id" },
        ]
      },
    ]
  });
};
