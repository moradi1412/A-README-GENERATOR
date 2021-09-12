// Including packages needed for this application
//inquirer to get the data from terminal 
const inquirer = require('inquirer');

const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitbubUsername', 
            message: "What is your GitHub username ? ",
            validate: userNameInput => {
            if (userNameInput) {
                return true; 
            } else {
                console.log("please enter your username! ")
                return false; 
            }
            }
        }, 
        {
            type: 'input',
            name: 'emailAddress', 
            message: "what is your email address ",
        }

    ]); 
}; 












// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
