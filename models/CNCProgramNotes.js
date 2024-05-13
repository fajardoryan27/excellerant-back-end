const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNCProgramNotes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    note_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    note_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note_creator: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'CNCProgramNotes',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__CNCProgr__CEDD0FA46571A040",
        unique: true,
        fields: [
          { name: "note_id" },
        ]
      },
    ]
  });
};
