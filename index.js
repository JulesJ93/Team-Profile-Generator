const inquirer = require('inquirer');

nquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((answers) =>
    answers.confirm === answers.password
      ? console.log(`Welcome to the club...${answers.username}`)
      : console.log('You forgot your password already?!')
  );
