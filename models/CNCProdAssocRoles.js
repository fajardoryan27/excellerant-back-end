const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNCProdAssocRoles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CNCProgram',
        key: 'program_id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CNCProdAssocRoles',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__CNCProdA__3213E83FDEAAF20C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
