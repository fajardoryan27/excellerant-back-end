const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RolesPermission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Permissions',
        key: 'permission_id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'UserRoles',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'RolesPermission',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__RolesPer__3213E83F9A3449F3",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
