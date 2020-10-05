const fs = require ('fs');

const generateMarkdown = require ('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
// console.log(inquirer);

const promptUser = () => {
  
return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Github Username!");
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What Is your Email address?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your email address!");
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project Title!");
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project description!");
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: [
        "MIT",
        "ISC",
        "Apache-2.0",
        "MPL-2.0"
        ]
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide installation instructions!");
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run test?'
        
      },
      {
        type: 'input',
        name: 'using',
        message: 'What does the user need to know about using the repo?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("please enter use!");
          }
        }
      },
      {
        type: 'input',
        name: 'credit',
        message: 'Please list all credits here.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("please enter use!");
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the rules for contributing to this project?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter contribution rules!");
          }
        }
      }
    
    ])
    .then(userResponse => {

      const readMe = generateMarkdown(userResponse);
  
        return writeToFile(readMe)
  
      })
  
      .then(response => {
  
        console.log(response);
  
      }) 
  
      .catch(err => {
  
        console.log(err);
  
      });
  
  };
  
  
  
  // function to write README file
  function writeToFile(userResponse) {
  
    // create a path to create the readme file
    const fileName = "./dist/readme.md";
  
  
  
    // Write the file
      return new Promise((resolve, reject) => {
  
      fs.writeFile(fileName, userResponse, err => {
  
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method 
  
        if (err) {
          reject(err);
          return;
          }
        //if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File Created!'
        });
      });
    });
  }

  // function to initialize program
  function init() {
  // store all the user's answers in a variable
  const userResponse = promptUser();
  }
  // function call to initialize program
  init();
