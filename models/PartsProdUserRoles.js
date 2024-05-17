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
        model: 'Roles',
        key: 'role_id'
      }
    },
    part_authorization_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    required_num_users: {
      type: DataTypes.INTEGER,
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
        name: "PK__PartsPro__9CED6FC816727065",
        unique: true,
        fields: [
          { name: "prod_stat_user_roles_id" },
        ]
      },
      {
        name: "PK__PartsPro__9CED6FC8FCD54181",
        unique: true,
        fields: [
          { name: "prod_stat_user_roles_id" },
        ]
      },
    ]
  });
};
