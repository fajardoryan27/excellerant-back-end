const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Roles', {
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Roles',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Roles__760965CC06250E94",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "PK__Roles__760965CCDA04464F",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
