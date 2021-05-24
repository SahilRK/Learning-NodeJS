//To load in any module, we use the require function. The value returned from the require has to be stored in a variable to be used. const <varname> = require('<module name>')
const fs = require('fs');  

fs.writeFileSync('notes.txt','This file is created by Node JS.');
fs.appendFileSync('notes.txt','\n\tThis is the second line addition to the file');