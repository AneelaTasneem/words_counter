#! /usr/bin/env node
// Import the 'inquirer' module
import inquirer from "inquirer";
// Prompt the user to enter a sentence
let user_response = await inquirer.prompt([
    {
        name: "sentence", // Save the user's input under the key 'sentence'
        type: "input",
        message: "Enter your sentence to count words."
    }
]);
// Trim the sentence to remove any leading or trailing spaces,
// then split the sentence into an array of words using spaces as the delimiter,
// and get the length of the array to count the number of words
let words_count = user_response.sentence.trim().split(" ").length;
// Print the number of words to the console
console.log(words_count);
