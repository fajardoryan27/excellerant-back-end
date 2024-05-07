

// const approvalRoutes = require("./routes/approvalListRoutes")
// 
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(cors());
// app.use('/api',approvalRoutes);

require("./routes/approvalListRoutes")(app);
require("./routes/partsRoute")(app);
require("./routes/operationsRoutes")(app);
require("./routes/machineTypesRoutes")(app);
require("./routes/operationTypesMachineRoutes")(app);
require("./routes/headRoutes")(app);
require("./routes/machineRoutes")(app);
require("./routes/machineTypesMemberRoutes")(app);
require("./routes/statusRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/revisionRoutes")(app);
require("./routes/cncProgramRoutes")(app);
require("./routes/sendHistoryRoutes")(app);
require("./routes/permissionRoutes")(app);
require("./routes/userGroupRoutes")(app);
require("./routes/userRoleRoutes")(app);
require("./routes/userRolePermissionRoutes")(app);
const db = require("./models");
db.sequelize.sync();
var port = process.env.PORT || 8090;
app.listen(port)
console.log('Server running in '+ port)

