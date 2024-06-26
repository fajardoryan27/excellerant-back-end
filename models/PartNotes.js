const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PartNotes', {
    part_notes_id: {
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
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    note_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'PartNotes',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__PartNote__1CA6105F0ABCD896",
        unique: true,
        fields: [
          { name: "part_notes_id" },
        ]
      },
      {
        name: "PK__PartNote__1CA6105FABE90320",
        unique: true,
        fields: [
          { name: "part_notes_id" },
        ]
      },
    ]
  });
};
