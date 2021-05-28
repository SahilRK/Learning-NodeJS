//To load in any module, we use the require function. The value returned from the require has to be stored in a variable to be used. const <varname> = require('<module name>')
/* const add = require('./utils.js');
const sum = add(5,4);
console.log(sum); */

//NOTE: This is how we load a core module.
//The package filesystem is used to perform operations on files
const fs = require('fs');

//The package validator is used to perform operations such as validating name or email address etc.
/* const validator = require('validator'); */

//The package chalk is used to paint words in the console, logs etc.
//const chalk = require('chalk');

//This package is used to parse command line arguments
const yargs = require('yargs');

//NOTE: This is how we load a user defined module
const notes = require('./notes.js');


//Let us run an example to use the validator package to return a boolean indicating a valid or invalid email.
//console.log(validator.isEmail('sahil.r.kulkarni@gmailcom'));

//console.log(chalk.green('Hello node'));

//Add 4 commands. Add,remove,list,read

//We are going to perform tasks based on the 4 commands passed from the command line. We will use the command method to add 4 commands
//1: Add
yargs.command({
    command: 'add',
    description: 'Adding item to the list',
    handler: function(){
        console.log('Adding item to the list')
    }
})

//2: Remove
yargs.command({
    command: 'remove',
    description: 'Removing item from the list',
    handler: function(){
        console.log('Remove item from the list')
    }
})

//3: List
yargs.command({
    command: 'list',
    description: 'Lists items from the cart',
    handler: function(){
        console.log('List item from the cart')
    }
})

//4: Read 
yargs.command({
    command: 'read',
    description: 'Read item from the list',
    handler: function(){
        console.log('Read item from the list')
    }
})

console.log(yargs.argv);
