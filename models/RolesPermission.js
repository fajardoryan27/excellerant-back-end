const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RolesPermission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'role_id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Permissions',
        key: 'permission_id'
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
        name: "PK__RolesPer__3213E83F03107CF5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "PK__RolesPer__3213E83F17E550F6",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
