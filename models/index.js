const dbConfig = require("../dbconfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize("nexaDB", "sa", "p@ssw0rd", {
  host: "localhost",
  port: 1433,
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.approvalList = require("./ApprovalList.js")(sequelize, Sequelize);
db.parts = require("./Parts.js")(sequelize, Sequelize);
db.operations = require("./Operations.js")(sequelize, Sequelize);
db.machineTypes = require("./MachineTypes.js")(sequelize, Sequelize);
db.operationsMachineTypes = require("./OperationsMachineTypes.js")(sequelize, Sequelize);
db.head = require("./Head.js")(sequelize, Sequelize);
db.machine = require("./Machines.js")(sequelize, Sequelize);
db.machine_types_member = require("./MachineTypesMember.js")(sequelize, Sequelize);
db.status = require("./Status.js")(sequelize, Sequelize);
db.user = require("./User.js")(sequelize, Sequelize);
db.revision = require("./Revision.js")(sequelize, Sequelize);
db.cncProgram = require("./CNCProgram.js")(sequelize, Sequelize);
db.sendHistory = require("./SendHistory.js")(sequelize, Sequelize);
db.permission = require("./Permissions.js")(sequelize, Sequelize);
db.usergroups = require("./UserGroups.js")(sequelize, Sequelize);
db.userrole = require("./UserRoles.js")(sequelize, Sequelize);
db.userrole_permission = require("./UserRolesPermission.js")(sequelize, Sequelize);

module.exports = db;