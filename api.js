var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const db = require("./models");
var ini = require('ini')
var fs = require('fs')
var config = ini.parse(fs.readFileSync('./Config.ini', 'utf-8'))
var port = config['serverPort']|| 8090;
let verifyToken = require('./middleware/verifytoken');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(cors());

require("./routes/partsRoute")(app);
require("./routes/operationsRoutes")(app);
require("./routes/machineTypesRoutes")(app);
require("./routes/operationTypesMachineRoutes")(app);
require("./routes/headRoutes")(app);
require("./routes/machineRoutes")(app);
require("./routes/statusRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/revisionRoutes")(app);
require("./routes/cncProgramRoutes")(app);
require("./routes/sendHistoryRoutes")(app);
require("./routes/permissionRoutes")(app);
require("./routes/userGroupRoutes")(app);
require("./routes/userRoleRoutes")(app);
require("./routes/userRolePermissionRoutes")(app);
require("./routes/partDocAssocRoutes")(app);
require("./routes/cncProdAssocRoutes")(app);
require("./routes/cncDLAssocRoutes")(app);
require("./routes/PartsProdUserRolesRoutes")(app);
require("./routes/MachineDLStatUserRolesRoutes")(app);
require("./routes/authRoutes")(app);

db.sequelize.sync();
app.listen(port)
console.log('Server running in '+ port)

