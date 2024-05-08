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
    number_of_heads: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    details: {
      type: DataTypes.STRING(255),
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
        name: "PK__Machines__7B75BEA976F83E60",
        unique: true,
        fields: [
          { name: "machine_id" },
        ]
      },
    ]
  });
};
