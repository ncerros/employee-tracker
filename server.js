// Dependencies required
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Establishing server & PORT
const connection = mysql.createConnection({
  host: "localhost",
  port: 8009,
  user: "root",
  password: "root",
  database: "tracker_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });
// This functions will start the inquire prompt
  function start() {
    inquirer
      .prompt({
        type: "list",
        name: "option",
        message: "What do you like to do?",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Department",
          "View Role",
          "View Employee",
          "Update Employee Role",
          "Exit"
        ]
      })
  
      .then(function(result) {
        console.log("You entered: " + result.option);
        switch (result.option) {
          case "Add Department":
            addDepartment();
            break;
          case "Add Role":
            addRole();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "View Department":
            viewDepartment();
            break;
          case "View Role":
            viewRole();
            break;
          case "View Employee":
            viewEmployee();
            break;
          case "Update Employee Role":
            updateRole();
            break;
          case "Exit":
            connection.end();
            break;
        }
      });
  }