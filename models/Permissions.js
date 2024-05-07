const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permissions', {
    permission_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    permission_desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Permissions',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Permissi__E5331AFA416AF72E",
        unique: true,
        fields: [
          { name: "permission_id" },
        ]
      },
    ]
  });
};
