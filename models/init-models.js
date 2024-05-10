var DataTypes = require("sequelize").DataTypes;
var _CNCProdAssocRoles = require("./CNCProdAssocRoles");
var _CNCProgram = require("./CNCProgram");
var _CNCProgramNotes = require("./CNCProgramNotes");
var _CNCRevisionListing = require("./CNCRevisionListing");
var _MachineDLStatUserRoles = require("./MachineDLStatUserRoles");
var _MachineHeadAssoc = require("./MachineHeadAssoc");
var _MachineTypes = require("./MachineTypes");
var _MachineTypesMemberAssoc = require("./MachineTypesMemberAssoc");
var _Machines = require("./Machines");
var _Operations = require("./Operations");
var _OperationsMachineTypes = require("./OperationsMachineTypes");
var _OperationsNotes = require("./OperationsNotes");
var _PartNotes = require("./PartNotes");
var _Parts = require("./Parts");
var _PartsDocumentAssociation = require("./PartsDocumentAssociation");
var _PartsProdUserRoles = require("./PartsProdUserRoles");
var _Permissions = require("./Permissions");
var _Roles = require("./Roles");
var _RolesPermission = require("./RolesPermission");
var _SendHistory = require("./SendHistory");
var _User = require("./User");

function initModels(sequelize) {
  var CNCProdAssocRoles = _CNCProdAssocRoles(sequelize, DataTypes);
  var CNCProgram = _CNCProgram(sequelize, DataTypes);
  var CNCProgramNotes = _CNCProgramNotes(sequelize, DataTypes);
  var CNCRevisionListing = _CNCRevisionListing(sequelize, DataTypes);
  var MachineDLStatUserRoles = _MachineDLStatUserRoles(sequelize, DataTypes);
  var MachineHeadAssoc = _MachineHeadAssoc(sequelize, DataTypes);
  var MachineTypes = _MachineTypes(sequelize, DataTypes);
  var MachineTypesMemberAssoc = _MachineTypesMemberAssoc(sequelize, DataTypes);
  var Machines = _Machines(sequelize, DataTypes);
  var Operations = _Operations(sequelize, DataTypes);
  var OperationsMachineTypes = _OperationsMachineTypes(sequelize, DataTypes);
  var OperationsNotes = _OperationsNotes(sequelize, DataTypes);
  var PartNotes = _PartNotes(sequelize, DataTypes);
  var Parts = _Parts(sequelize, DataTypes);
  var PartsDocumentAssociation = _PartsDocumentAssociation(sequelize, DataTypes);
  var PartsProdUserRoles = _PartsProdUserRoles(sequelize, DataTypes);
  var Permissions = _Permissions(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var RolesPermission = _RolesPermission(sequelize, DataTypes);
  var SendHistory = _SendHistory(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  CNCProdAssocRoles.belongsTo(CNCProgram, { as: "program", foreignKey: "program_id"});
  CNCProgram.hasMany(CNCProdAssocRoles, { as: "CNCProdAssocRoles", foreignKey: "program_id"});
  SendHistory.belongsTo(CNCProgram, { as: "program", foreignKey: "program_id"});
  CNCProgram.hasMany(SendHistory, { as: "SendHistories", foreignKey: "program_id"});
  CNCProgram.belongsTo(CNCRevisionListing, { as: "revision", foreignKey: "revision_id"});
  CNCRevisionListing.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "revision_id"});
  SendHistory.belongsTo(CNCRevisionListing, { as: "revision", foreignKey: "revision_id"});
  CNCRevisionListing.hasMany(SendHistory, { as: "SendHistories", foreignKey: "revision_id"});
  CNCProgram.belongsTo(MachineHeadAssoc, { as: "head", foreignKey: "head_id"});
  MachineHeadAssoc.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "head_id"});
  MachineTypesMemberAssoc.belongsTo(MachineTypes, { as: "machine_type", foreignKey: "machine_type_id"});
  MachineTypes.hasMany(MachineTypesMemberAssoc, { as: "MachineTypesMemberAssocs", foreignKey: "machine_type_id"});
  Machines.belongsTo(MachineTypes, { as: "machine_type", foreignKey: "machine_type_id"});
  MachineTypes.hasMany(Machines, { as: "Machines", foreignKey: "machine_type_id"});
  OperationsMachineTypes.belongsTo(MachineTypes, { as: "machine_type", foreignKey: "machine_type_id"});
  MachineTypes.hasMany(OperationsMachineTypes, { as: "OperationsMachineTypes", foreignKey: "machine_type_id"});
  MachineHeadAssoc.belongsTo(Machines, { as: "machine", foreignKey: "machine_id"});
  Machines.hasMany(MachineHeadAssoc, { as: "MachineHeadAssocs", foreignKey: "machine_id"});
  MachineTypesMemberAssoc.belongsTo(Machines, { as: "machine", foreignKey: "machine_id"});
  Machines.hasMany(MachineTypesMemberAssoc, { as: "MachineTypesMemberAssocs", foreignKey: "machine_id"});
  CNCProgram.belongsTo(Operations, { as: "machine_type", foreignKey: "machine_type_id"});
  Operations.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "machine_type_id"});
  OperationsMachineTypes.belongsTo(Operations, { as: "operation", foreignKey: "operations_id"});
  Operations.hasMany(OperationsMachineTypes, { as: "OperationsMachineTypes", foreignKey: "operations_id"});
  OperationsNotes.belongsTo(Operations, { as: "operation", foreignKey: "operations_id"});
  Operations.hasMany(OperationsNotes, { as: "OperationsNotes", foreignKey: "operations_id"});
  CNCProgram.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "part_id"});
  MachineDLStatUserRoles.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(MachineDLStatUserRoles, { as: "MachineDLStatUserRoles", foreignKey: "part_id"});
  Operations.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(Operations, { as: "Operations", foreignKey: "part_id"});
  PartNotes.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(PartNotes, { as: "PartNotes", foreignKey: "part_id"});
  PartsDocumentAssociation.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(PartsDocumentAssociation, { as: "PartsDocumentAssociations", foreignKey: "part_id"});
  PartsProdUserRoles.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(PartsProdUserRoles, { as: "PartsProdUserRoles", foreignKey: "part_id"});
  RolesPermission.belongsTo(Permissions, { as: "permission", foreignKey: "permission_id"});
  Permissions.hasMany(RolesPermission, { as: "RolesPermissions", foreignKey: "permission_id"});
  MachineDLStatUserRoles.belongsTo(Roles, { as: "role", foreignKey: "role_id"});
  Roles.hasMany(MachineDLStatUserRoles, { as: "MachineDLStatUserRoles", foreignKey: "role_id"});
  PartsProdUserRoles.belongsTo(Roles, { as: "role", foreignKey: "role_id"});
  Roles.hasMany(PartsProdUserRoles, { as: "PartsProdUserRoles", foreignKey: "role_id"});
  RolesPermission.belongsTo(Roles, { as: "role", foreignKey: "role_id"});
  Roles.hasMany(RolesPermission, { as: "RolesPermissions", foreignKey: "role_id"});
  CNCProgramNotes.belongsTo(User, { as: "note_creator_User", foreignKey: "note_creator"});
  User.hasMany(CNCProgramNotes, { as: "CNCProgramNotes", foreignKey: "note_creator"});
  CNCRevisionListing.belongsTo(User, { as: "revised_by_User", foreignKey: "revised_by"});
  User.hasMany(CNCRevisionListing, { as: "CNCRevisionListings", foreignKey: "revised_by"});
  OperationsNotes.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(OperationsNotes, { as: "OperationsNotes", foreignKey: "user_id"});
  PartNotes.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(PartNotes, { as: "PartNotes", foreignKey: "user_id"});
  SendHistory.belongsTo(User, { as: "head_sent_to_User", foreignKey: "head_sent_to"});
  User.hasMany(SendHistory, { as: "SendHistories", foreignKey: "head_sent_to"});
  SendHistory.belongsTo(User, { as: "machine_sent_to_User", foreignKey: "machine_sent_to"});
  User.hasMany(SendHistory, { as: "machine_sent_to_SendHistories", foreignKey: "machine_sent_to"});
  SendHistory.belongsTo(User, { as: "sent_by_User", foreignKey: "sent_by"});
  User.hasMany(SendHistory, { as: "sent_by_SendHistories", foreignKey: "sent_by"});

  return {
    CNCProdAssocRoles,
    CNCProgram,
    CNCProgramNotes,
    CNCRevisionListing,
    MachineDLStatUserRoles,
    MachineHeadAssoc,
    MachineTypes,
    MachineTypesMemberAssoc,
    Machines,
    Operations,
    OperationsMachineTypes,
    OperationsNotes,
    PartNotes,
    Parts,
    PartsDocumentAssociation,
    PartsProdUserRoles,
    Permissions,
    Roles,
    RolesPermission,
    SendHistory,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
