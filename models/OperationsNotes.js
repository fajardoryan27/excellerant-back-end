const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OperationsNotes', {
    op_notes_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    operations_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Operations',
        key: 'operations_id'
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
    tableName: 'OperationsNotes',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Operatio__A84547CED4FCC025",
        unique: true,
        fields: [
          { name: "op_notes_id" },
        ]
      },
    ]
  });
};
