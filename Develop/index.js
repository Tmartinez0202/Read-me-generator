// array of questions for user
const inquirer = require("inquirer");




const questions = [
    inquirer.prompt([
        {
            type: "input",
            message:"What is your github name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your email",
            name: "email"
        },
        {
            type: "input",
            message: "What is your project name",
            name: "project"
        },
        {
            type: "input",
            message: "Please write a short description of your project",
            name: "description"
        },
        {
            type:"list",
            message:"What kind of license should your project have",
            name: "license",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            message: "what command should be run to install dependencies",
            default: "npm i",
            name: "install"
        },
        {
            
        }

    ])

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
