const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PartsProdUserRoles', {
    prod_stat_user_roles_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    part_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Parts',
        key: 'part_id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'UserRoles',
        key: 'role_id'
      }
    },
    required_num_users: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    part_authorization_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PartsProdUserRoles',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__PartsPro__9CED6FC8180182D8",
        unique: true,
        fields: [
          { name: "prod_stat_user_roles_id" },
        ]
      },
    ]
  });
};
