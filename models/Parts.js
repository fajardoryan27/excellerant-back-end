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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    part_revision: {
      type: DataTypes.STRING(255),
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
        name: "PK__Parts__A0E3FAB8B3046A76",
        unique: true,
        fields: [
          { name: "part_id" },
        ]
      },
      {
        name: "PK__Parts__A0E3FAB8E09A91F8",
        unique: true,
        fields: [
          { name: "part_id" },
        ]
      },
    ]
  });
};
