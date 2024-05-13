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
      allowNull: true,
      references: {
        model: 'Operations',
        key: 'operations_id'
      }
    },
    machine_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MachineTypes',
        key: 'machine_type_id'
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
    program_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    program_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    revision_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CNCRevisionListing',
        key: 'revision_id'
      }
    },
    prod_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dl_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    main_program_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CNCProgram',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__CNCProgr__3A7890AC9DD07DE9",
        unique: true,
        fields: [
          { name: "program_id" },
        ]
      },
    ]
  });
};
