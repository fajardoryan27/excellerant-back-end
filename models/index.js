var ini = require('ini')
var fs = require('fs')
var config = ini.parse(fs.readFileSync('./Config.ini', 'utf-8'))
const crypto = require("crypto")
const decrypt = (encryptedText, password) => {
  try {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedData = Buffer.from(textParts.join(':'), 'hex');
    const key = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    
    const decrypted = decipher.update(encryptedData);
    const decryptedText = Buffer.concat([decrypted, decipher.final()]);
    return decryptedText.toString();
  } catch (error) {
    console.log(error)
  }
}
pass = "secret1234"
const decText = decrypt(config['dbPass'], pass)
console.log(decText)
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config['dbName'], config['dbUser'], decText, {
  host: config['host'],
  port: config['port'],
  dialect: config['dialect'],
  // dialectOptions: {
  //   "options": {
  //       "instanceName": "SQLEXPRESS",
  //   }
  // },
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

db.parts = require("./Parts.js")(sequelize, Sequelize);
db.operations = require("./Operations.js")(sequelize, Sequelize);
db.machineTypes = require("./MachineTypes.js")(sequelize, Sequelize);
db.operationsMachineTypes = require("./OperationsMachineTypes.js")(sequelize, Sequelize);
db.head = require("./MachineHeadAssoc.js")(sequelize, Sequelize);
db.machine = require("./Machines.js")(sequelize, Sequelize);
db.user = require("./User.js")(sequelize, Sequelize);
db.revision = require("./CNCRevisionListing.js")(sequelize, Sequelize);
db.cncProgram = require("./CNCProgram.js")(sequelize, Sequelize);
db.sendHistory = require("./SendHistory.js")(sequelize, Sequelize);
db.permission = require("./Permissions.js")(sequelize, Sequelize);
db.userrole = require("./Roles.js")(sequelize, Sequelize);
db.userrole_permission = require("./RolesPermission.js")(sequelize, Sequelize);

module.exports = db;