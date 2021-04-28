const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Establish server & PORT

const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "tracker_DB"
});