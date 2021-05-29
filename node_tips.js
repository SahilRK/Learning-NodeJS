//1) The window equivalent object of the browser in node is called "global"
//2) window is the global object of the browser and document is the main DOM object. These are available only in the browser.
//3) Similarly, global and process objects are the respective equivalents of window and document. global contains all the properties and methods that are available on the global object. The process object contains various properties and methods for the node process that is running.
//4) NodeJS uses an event-driven,non-blocking I/O that makes it lightweight and efficient. Non-blocking I/O means that the user can interact with the browser even when there is an I/O process happening in the background.
//5) To run a simple node script, open the terminal and type node <the js file name>
console.log(`Hey welcome to nodejs`);

//NODE MODULE SYSTEM
//6)To load in any module, we use the require function. The value returned from the require has to be stored in a variable to be used. const <varname> = require('<module name>')
//7)When a module is loaded with require, and we try to access a variable from the other module or file, we cannot access it since the scope of the variables is limited only to their file. To counter this, we use a concept of node called module.exports. This defines what can be shared with other files. Whatever is assigned to module.exports, gets exported for other files to use.
const name = "Sahil";
module.exports = name

//So in the file that requires this file, the name variable is returned back which can then we stored in a variable and accessed.

//8) NPM: Inorder to use the to use all the packages from npm, we have to create a file to manage all the dependencies. We run the "npm init" command in the command line which creates a package.json file. 

//9) Either add the node modules folder to .gitignore so that the node modules does not get pushed to git. Or delete the node modules while sharing it with others. This will ensure that the size of the package is reduced. The user can always run npm init to recreate the node modules folder which will create it from the packages mentioned in the package.json.

//10) Installing packages globally: We install npm packages globally which dont need to be required into into the project. They give us commands that we can access directly from the terminal. We install packages globally as follows "npm install <package name>@<version> -g".

//11) Nodemon: This package is installed globally using -g on npm install. nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. 
  
//12) Node CL Arguments: The command line arguments in node is used to pass data to the file that node runs. It passes data to the process object in the following way - "node app.js Sahil". This data is stored in process.argv property(Argument vector) in the form of an array as follows
[
    '/usr/local/bin/node',
    '/Users/HURRICANE/JavaScript/Learning-NodeJS/Notes-App/app.js',
    'Sahil'
]
/* 
Index1 is the path of the node executable 
Index2 is the file running the process
Index3 onwards the arguments passed can be accessed. Eg Sahil
*/

/*
13) Important JSON methods and uses.
    1) JSON.stringify(<js object>) - The stringify method is used to convert a normal JS object to a JSON object(String based object since in JSON all the key and properties have to be strings)
    const bookJSON = JSON.stringify(book);
    2) JSON.parse(<json object>) - The parse method is used to convert a JSON object to a normal JS object.
    const bookJS = JSON.parse(bookJSON);

14) FS methods that can be combined to write and read to and from JSON file.
    1) fs.writeFileSync('file name','data to be written) - Data can be written to a file using this method. It creates the file if the file cannot be found.
    fs.writeFileSync('1-json.json',bookJSON);
    2)fs.readFileSync('<file name to be read>') - The file is read as buffer data which is NODEJS's way of representing binary data.
    const dataBuffer = fs.readFileSync('1-json.json');
    To convert this into JSON, we use the toString method.
    const bufferToJSON = dataBuffer.toString();
*/