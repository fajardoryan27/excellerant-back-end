const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Revision', {
    revision_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    revision_number: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    revised_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    revision_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    revision_comment: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    database_path: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'status_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Revision',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Revision__03BAF0056AA9FEBA",
        unique: true,
        fields: [
          { name: "revision_id" },
        ]
      },
    ]
  });
};
