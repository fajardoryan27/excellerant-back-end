const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserGroups', {
    group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    group_permission: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Permissions',
        key: 'permission_id'
      }
    }
  }, {
    sequelize,
    tableName: 'UserGroups',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__UserGrou__D57795A04BCB3BED",
        unique: true,
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
