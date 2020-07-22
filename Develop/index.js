// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
const util = require("util");
const path = require("path");



const questions = [
    
        {
            type: "input",
            message:"What is your github url",
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
            name: "title"
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
            name: "install",
            default: "npm i"
        },
        {
            type: "input",
            message: "What command should be run to run tests",
            name: "test",
            default: "npm test"
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo",
            name: "needToKnow"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo",
            name: "contribution"
        }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("generating markdown")
        writeToFile("README.md", generateMarkdown({...answers}))
    })
}

// function call to initialize program
init();

