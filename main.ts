#! usr/env/bin node 

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\t Welcome to Word Counter App \t"));

const questions : {first : string } = await inquirer.prompt(
    [
        {
            name:"first",
            type:"string",
            message:"Enter the word that you want to count "
        }
    ]
)
const word : string = questions.first;
const count = word.trim().split(" ");

// console.log(typeof(count))
console.log(chalk.bold.green(`The word is `, chalk.bold.yellow(`${count}`)));
console.log(chalk.bold.magenta(`The number of words without whitespace are `, chalk.bold.yellow(`${count.length}`)));

