const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserRolesPermission', {
    user_role_prmsn_id: {
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
    tableName: 'UserRolesPermission',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__UserRole__93B92EBAA45A606C",
        unique: true,
        fields: [
          { name: "user_role_prmsn_id" },
        ]
      },
    ]
  });
};
