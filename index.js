// Including packages needed for this application
//inquirer to get the data from terminal 
const inquirer = require('inquirer');
const fs = require('fs'); 
//loading the readme template code 
const generateReadme = require("./src/read-me-template.js");
const {writeFile} = require('./utils/generate-site'); 



const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName', 
            message: "What is your project name? "
        },
        {
            type: 'input',
            name: 'projectName', 
            message: "Please write a description of your project"
        },
        {   
            type: 'input',
            name: 'githubUsername', 
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
            message: "What is your email address? "
        },
        {
            type: 'checkbox',
            name: 'licenses', 
            message: "What kind of license your projectr should have ? ",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input',
            name: 'runCommand', 
            message: "What command should be run to install dependencies?  ", 
            default: "npm install"
        },
        {
            type: 'input',
            name: 'runTest', 
            message: "What command should be run to test", 
            default: "npm test"
        },
        {
            type: 'input',
            name: 'repoInfo', 
            message: "What does the user need to know about using the repo", 
        },
        {
            type: 'input',
            name: 'contributing', 
            message: "What does the user need to know about contributing to the repo", 
        },

    ]); 
}; 


userPrompt()
.then(userData => {
    return generateReadme(userData); 
})
.then(ReadmeMD => {
    return writeFile(ReadmeMD); 
});  






// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
