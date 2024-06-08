import inquirer from "inquirer";

const input = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter the paragraph: "
    }
]);

let characters: number = input.name.replace(/\s+/g,"").length;
console.log(`The number of characters in the paragraph is ${characters}.`);
let words: number = input.name.split(" ").length;
console.log(`The number of words in the paragraph  is ${words}`);
