const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parts', {
    part_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    part_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    approval_requirements: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ApprovalList',
        key: 'approval_id'
      }
    },
    description: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    itar_restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    revision_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    part_authorization_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Parts',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Parts__A0E3FAB8DCF53D35",
        unique: true,
        fields: [
          { name: "part_id" },
        ]
      },
    ]
  });
};
