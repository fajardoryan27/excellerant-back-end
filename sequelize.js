var ini = require('ini')
var fs = require('fs')
var config = ini.parse(fs.readFileSync('./Config.ini', 'utf-8'))

const SequelizeAuto = require('sequelize-auto');
const path = require('path');

console.log(config['host'])
const options = {
  dialect: config['dialect'], // Replace with your database dialect (e.g., mysql, postgres, etc.)
  host: config['host'],
  port: config['port'], // Replace with your database port
  database: config['dbName'], // Replace with your database name
  username: config['dbUser'], // Replace with your database username
  password: config['dbPass'], // Replace with your database password
  directory: path.resolve(__dirname, './models'), // Replace with the desired output directory for models
  additional: {
    timestamps: false, // Additional options for model generation (e.g., timestamps, underscored, etc.)
    underscored: true
  }
};
const auto = new SequelizeAuto(null, null, null, options);
auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // List of generated tables
});