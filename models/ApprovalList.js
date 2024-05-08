const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ApprovalList', {
    approval_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    programmer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    engineer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quality: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ApprovalList',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Approval__C94AE61A71AC36F9",
        unique: true,
        fields: [
          { name: "approval_id" },
        ]
      },
    ]
  });
};
