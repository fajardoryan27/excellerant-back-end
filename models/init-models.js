var DataTypes = require("sequelize").DataTypes;
var _ApprovalList = require("./ApprovalList");
var _CNCProgram = require("./CNCProgram");
var _Head = require("./Head");
var _MachineTypes = require("./MachineTypes");
var _MachineTypesMember = require("./MachineTypesMember");
var _Machines = require("./Machines");
var _Operations = require("./Operations");
var _OperationsMachineTypes = require("./OperationsMachineTypes");
var _Parts = require("./Parts");
var _Permissions = require("./Permissions");
var _Revision = require("./Revision");
var _SendHistory = require("./SendHistory");
var _Status = require("./Status");
var _User = require("./User");
var _UserGroups = require("./UserGroups");
var _UserRoles = require("./UserRoles");
var _UserRolesPermission = require("./UserRolesPermission");

function initModels(sequelize) {
  var ApprovalList = _ApprovalList(sequelize, DataTypes);
  var CNCProgram = _CNCProgram(sequelize, DataTypes);
  var Head = _Head(sequelize, DataTypes);
  var MachineTypes = _MachineTypes(sequelize, DataTypes);
  var MachineTypesMember = _MachineTypesMember(sequelize, DataTypes);
  var Machines = _Machines(sequelize, DataTypes);
  var Operations = _Operations(sequelize, DataTypes);
  var OperationsMachineTypes = _OperationsMachineTypes(sequelize, DataTypes);
  var Parts = _Parts(sequelize, DataTypes);
  var Permissions = _Permissions(sequelize, DataTypes);
  var Revision = _Revision(sequelize, DataTypes);
  var SendHistory = _SendHistory(sequelize, DataTypes);
  var Status = _Status(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var UserGroups = _UserGroups(sequelize, DataTypes);
  var UserRoles = _UserRoles(sequelize, DataTypes);
  var UserRolesPermission = _UserRolesPermission(sequelize, DataTypes);

  Parts.belongsTo(ApprovalList, { as: "approval_requirements_ApprovalList", foreignKey: "approval_requirements"});
  ApprovalList.hasMany(Parts, { as: "Parts", foreignKey: "approval_requirements"});
  SendHistory.belongsTo(CNCProgram, { as: "program", foreignKey: "program_id"});
  CNCProgram.hasMany(SendHistory, { as: "SendHistories", foreignKey: "program_id"});
  CNCProgram.belongsTo(Head, { as: "head", foreignKey: "head_id"});
  Head.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "head_id"});
  Machines.belongsTo(Head, { as: "head", foreignKey: "head_id"});
  Head.hasMany(Machines, { as: "Machines", foreignKey: "head_id"});
  MachineTypesMember.belongsTo(MachineTypes, { as: "machine_type", foreignKey: "machine_type_id"});
  MachineTypes.hasMany(MachineTypesMember, { as: "MachineTypesMembers", foreignKey: "machine_type_id"});
  OperationsMachineTypes.belongsTo(MachineTypes, { as: "machine_type", foreignKey: "machine_type_id"});
  MachineTypes.hasMany(OperationsMachineTypes, { as: "OperationsMachineTypes", foreignKey: "machine_type_id"});
  MachineTypesMember.belongsTo(Machines, { as: "machine", foreignKey: "machine_id"});
  Machines.hasMany(MachineTypesMember, { as: "MachineTypesMembers", foreignKey: "machine_id"});
  CNCProgram.belongsTo(Operations, { as: "operation", foreignKey: "operation_id"});
  Operations.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "operation_id"});
  OperationsMachineTypes.belongsTo(Operations, { as: "operation", foreignKey: "operations_id"});
  Operations.hasMany(OperationsMachineTypes, { as: "OperationsMachineTypes", foreignKey: "operations_id"});
  CNCProgram.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "part_id"});
  Operations.belongsTo(Parts, { as: "part", foreignKey: "part_id"});
  Parts.hasMany(Operations, { as: "Operations", foreignKey: "part_id"});
  UserGroups.belongsTo(Permissions, { as: "group_permission_Permission", foreignKey: "group_permission"});
  Permissions.hasMany(UserGroups, { as: "UserGroups", foreignKey: "group_permission"});
  UserRolesPermission.belongsTo(Permissions, { as: "permission", foreignKey: "permission_id"});
  Permissions.hasMany(UserRolesPermission, { as: "UserRolesPermissions", foreignKey: "permission_id"});
  CNCProgram.belongsTo(Revision, { as: "revision_Revision", foreignKey: "revision"});
  Revision.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "revision"});
  SendHistory.belongsTo(Revision, { as: "revision", foreignKey: "revision_id"});
  Revision.hasMany(SendHistory, { as: "SendHistories", foreignKey: "revision_id"});
  CNCProgram.belongsTo(Status, { as: "approval_requirements_Status", foreignKey: "approval_requirements"});
  Status.hasMany(CNCProgram, { as: "CNCPrograms", foreignKey: "approval_requirements"});
  Revision.belongsTo(Status, { as: "status_Status", foreignKey: "status"});
  Status.hasMany(Revision, { as: "Revisions", foreignKey: "status"});
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
  UserRolesPermission.belongsTo(UserRoles, { as: "role", foreignKey: "role_id"});
  UserRoles.hasMany(UserRolesPermission, { as: "UserRolesPermissions", foreignKey: "role_id"});

  return {
    ApprovalList,
    CNCProgram,
    Head,
    MachineTypes,
    MachineTypesMember,
    Machines,
    Operations,
    OperationsMachineTypes,
    Parts,
    Permissions,
    Revision,
    SendHistory,
    Status,
    User,
    UserGroups,
    UserRoles,
    UserRolesPermission,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
