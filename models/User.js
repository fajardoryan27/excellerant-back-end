const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    user_group: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__User__B9BE370F0506FB27",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
