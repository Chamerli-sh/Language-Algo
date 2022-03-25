const inquirer = require('inquirer');

const PL_WBRACK = ['Javascript', 'Java', 'Rust']; // Programming Language with brackets
const PL_WDP = ['Python'] // Programming Language with the double points
const PL_CUSED = ['Javascript', 'Java', 'Python']


async function askBrackets(){
    const answer = await inquirer.prompt({
        name: "brackets",
        type: "list",
        message: "Do You Like Brackets?",
        choices: [
            "Absolutly, i'd die if not",
            "Yes I would prefer if",
            "Don't care",
            "No I would prefer not",
            "NOOOO! it 'll kill me"
        ]
    });

    return console.log("Hello World!");
}
askBrackets();