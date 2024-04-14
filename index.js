#! /usr/bin/env node
import inquirer from "inquirer";
const query = await inquirer.prompt([{
        message: 'Hi, enter the name',
        type: 'input',
        name: 'name',
    }]);
console.log(`Hello ${query.name}`);
