var DataTypes = require("sequelize").DataTypes;
var _ApprovalList = require("./ApprovalList");
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
var _Revision = require("./Revision");
var _Roles = require("./Roles");
var _RolesPermission = require("./RolesPermission");
var _SendHistory = require("./SendHistory");
var _Status = require("./Status");
var _User = require("./User");
var _UserRoles = require("./UserRoles");
var _UserRolesPermission = require("./UserRolesPermission");

function initModels(sequelize) {
  var ApprovalList = _ApprovalList(sequelize, DataTypes);
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
  var Revision = _Revision(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var RolesPermission = _RolesPermission(sequelize, DataTypes);
  var SendHistory = _SendHistory(sequelize, DataTypes);
  var Status = _Status(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var UserRoles = _UserRoles(sequelize, DataTypes);
  var UserRolesPermission = _UserRolesPermission(sequelize, DataTypes);

  CNCProdAssocRoles.belongsTo(CNCProgram, { as: "program", foreignKey: "program_id"});
  CNCProgram.hasMany(CNCProdAssocRoles, { as: "CNCProdAssocRoles", foreignKey: "program_id"});
  SendHistory.belongsTo(CNCProgram, { as: "program", foreignKey: "program_id"});
  CNCProgram.hasMany(SendHistory, { as: "SendHistories", foreignKey: "program_id"});
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
  UserRolesPermission.belongsTo(Permissions, { as: "permission", foreignKey: "permission_id"});
  Permissions.hasMany(UserRolesPermission, { as: "UserRolesPermissions", foreignKey: "permission_id"});
  CNCProgram.belongsTo(Revision, { as: "revision_Revision", foreignKey: "revision"});
  Revision.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "revision"});
  SendHistory.belongsTo(Revision, { as: "revision", foreignKey: "revision_id"});
  Revision.hasMany(SendHistory, { as: "SendHistories", foreignKey: "revision_id"});
  CNCProgram.belongsTo(Status, { as: "approval_requirements_Status", foreignKey: "approval_requirements"});
  Status.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "approval_requirements"});
  CNCProgramNotes.belongsTo(User, { as: "note_creator_User", foreignKey: "note_creator"});
  User.hasMany(CNCProgramNotes, { as: "CNCProgramNotes", foreignKey: "note_creator"});
  CNCRevisionListing.belongsTo(User, { as: "revision_by_User", foreignKey: "revision_by"});
  User.hasMany(CNCRevisionListing, { as: "CNCRevisionListings", foreignKey: "revision_by"});
  OperationsNotes.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(OperationsNotes, { as: "OperationsNotes", foreignKey: "user_id"});
  PartNotes.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(PartNotes, { as: "PartNotes", foreignKey: "user_id"});
  Revision.belongsTo(User, { as: "created_by_User", foreignKey: "created_by"});
  User.hasMany(Revision, { as: "Revisions", foreignKey: "created_by"});
  Revision.belongsTo(User, { as: "revised_by_User", foreignKey: "revised_by"});
  User.hasMany(Revision, { as: "revised_by_Revisions", foreignKey: "revised_by"});
  SendHistory.belongsTo(User, { as: "head_sent_to_User", foreignKey: "head_sent_to"});
  User.hasMany(SendHistory, { as: "SendHistories", foreignKey: "head_sent_to"});
  SendHistory.belongsTo(User, { as: "machine_sent_to_User", foreignKey: "machine_sent_to"});
  User.hasMany(SendHistory, { as: "machine_sent_to_SendHistories", foreignKey: "machine_sent_to"});
  SendHistory.belongsTo(User, { as: "sent_by_User", foreignKey: "sent_by"});
  User.hasMany(SendHistory, { as: "sent_by_SendHistories", foreignKey: "sent_by"});
  MachineDLStatUserRoles.belongsTo(UserRoles, { as: "role", foreignKey: "role_id"});
  UserRoles.hasMany(MachineDLStatUserRoles, { as: "MachineDLStatUserRoles", foreignKey: "role_id"});
  PartsProdUserRoles.belongsTo(UserRoles, { as: "role", foreignKey: "role_id"});
  UserRoles.hasMany(PartsProdUserRoles, { as: "PartsProdUserRoles", foreignKey: "role_id"});
  RolesPermission.belongsTo(UserRoles, { as: "role", foreignKey: "role_id"});
  UserRoles.hasMany(RolesPermission, { as: "RolesPermissions", foreignKey: "role_id"});
  User.belongsTo(UserRoles, { as: "role", foreignKey: "role_id"});
  UserRoles.hasMany(User, { as: "Users", foreignKey: "role_id"});
  UserRolesPermission.belongsTo(UserRoles, { as: "role", foreignKey: "role_id"});
  UserRoles.hasMany(UserRolesPermission, { as: "UserRolesPermissions", foreignKey: "role_id"});

  return {
    ApprovalList,
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
    Revision,
    Roles,
    RolesPermission,
    SendHistory,
    Status,
    User,
    UserRoles,
    UserRolesPermission,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
