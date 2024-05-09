const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNCProgram', {
    program_id: {
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
    operation_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    machine_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Operations',
        key: 'operations_id'
      }
    },
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MachineHeadAssoc',
        key: 'head_id'
      }
    },
    order: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    approval_requirements: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'status_id'
      }
    },
    program_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Revision',
        key: 'revision_id'
      }
    }
  }, {
    sequelize,
    tableName: 'CNCProgram',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__CNCProgr__3A7890ACD9AB8D5E",
        unique: true,
        fields: [
          { name: "program_id" },
        ]
      },
    ]
  });
};
