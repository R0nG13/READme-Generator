const fs = require ('fs');
const inquirer = require('inquirer');
console.log(inquirer);
inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'username',
        message: 'What is your git hub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What Is your Email address?'
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license should be run to install your project dependencies?'
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?'
      },
      {
        type: 'input',
        name: 'runTest',
        message: 'What command should be run to run test?'
      },
      {
        type: 'input',
        name: 'using',
        message: 'What does the user need to know about using the repo?'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
      },
    
    ])
    
    .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);

    })
    .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// array of questions for user

const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
