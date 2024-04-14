#! /usr/bin/env node
import inquirer from "inquirer";

const query = await inquirer.prompt([
  {
    message: "Enter number 1",
    type: "number",
    name: "firstnum",
  },
  {
    message: "Enter number 2",
    type: "number",
    name: "secondnum",
  },
  {
    message: "Which operatuion do you want to perform?",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (query.operator === "Addition") {
  console.log(query.firstnum + query.secondnum);
} else if (query.operator === "Subtraction") {
  console.log(query.firstnum - query.secondnum);
} else if (query.operator === "Multiplication") {
  console.log(query.firstnum * query.secondnum);
} else {
  console.log(query.firstnum / query.secondnum);
}
console.log(query);
