const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SendHistory', {
    send_id: {
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
    revision_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CNCRevisionListing',
        key: 'revision_id'
      }
    },
    sent_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    machine_sent_to: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    head_sent_to: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    send_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SendHistory',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__SendHist__E794FE7D316E6121",
        unique: true,
        fields: [
          { name: "send_id" },
        ]
      },
      {
        name: "PK__SendHist__E794FE7D668B03D6",
        unique: true,
        fields: [
          { name: "send_id" },
        ]
      },
    ]
  });
};
