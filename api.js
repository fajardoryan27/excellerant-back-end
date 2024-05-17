var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var ini = require('ini')
var fs = require('fs')
var config = ini.parse(fs.readFileSync('./Config.ini', 'utf-8'))
var port = config['serverPort']|| 8090;
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
// Enable CORS for all origins
app.use(cors({
  origin: process.env.FRONT_LOCAL_URL,
  credentials: true // Allow credentials (e.g., cookies, authorization headers)
}));


require("./routes/Parts/partsRoute")(app);
require("./routes/Operations/operationsRoutes")(app);
require("./routes/Machines/machineTypesRoutes")(app);
require("./routes/Operations/operationTypesMachineRoutes")(app);
require("./routes/Machines/headRoutes")(app);
require("./routes/Machines/machineRoutes")(app);
require("./routes/User/userRoutes")(app);
require("./routes/revisionRoutes")(app);
require("./routes/CNC/cncProgramRoutes")(app);
require("./routes/sendHistoryRoutes")(app);
require("./routes/permissionRoutes")(app);
require("./routes/User/userGroupRoutes")(app);
require("./routes/User/userRoleRoutes")(app);
require("./routes/User/userRolePermissionRoutes")(app);
require("./routes/Parts/partDocAssocRoutes")(app);
require("./routes/CNC/cncProdAssocRoutes")(app);
require("./routes/CNC/cncDLAssocRoutes")(app);
require("./routes/Parts/PartsProdUserRolesRoutes")(app);
require("./routes/Machines/MachineDLStatUserRolesRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/Parts/partNotes")(app);
require("./routes/Operations/operationNotesRoutes")(app);
require("./routes/CNC/cncProgramNotesRoutes")(app);
require("./routes/CNC/cncProgramRevisionRoutes")(app);
db.sequelize.sync();
app.listen(port)
console.log('Server running in '+ port)

