const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Team manager name?',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter the manager's name!");
            return false; 
        }
    }
},
{
  type: 'input',
  name: 'id',
  message: "Please enter the employee's ID.",
  validate: nameInput => {
      if  (isNaN(nameInput)) {
          console.log ("Please enter the employee's ID!")
          return false; 
      } else {
          return true;
      }
  }
},
{
  type: 'input',
  name: 'email',
  message: "Please enter the employee's email.",
  validate: email => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (valid) {
          return true;
      } else {
          console.log ('Please enter an email!')
          return false; 
      }
  }
},
{
  type: 'input',
  name: 'github',
  message: "Please enter the employee's github username.",
  when: (input) => input.role === "Engineer",
  validate: nameInput => {
      if (nameInput ) {
          return true;
      } else {
          console.log ("Please enter the employee's github username!")
      }
  }
},