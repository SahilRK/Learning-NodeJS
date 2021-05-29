const fs = require('fs');


/* const book = {
    title: 'Wings of fire',
    author: 'APJ Abdul Kalam'
}

//The stringify method is used to convert a normal JS object to a JSON object(String based object since in JSON all the key and properties have to be strings)
const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-jsondata.json',bookJSON); */

/* //readFileSync returns a result as a buffer which is NODEJS's way of representing binary data
const dataBuffer = fs.readFileSync('1-jsondata.json');
//To convert this binary data to json data, we use the toString method.
const dataBufferToJSON = dataBuffer.toString();
console.log(dataBufferToJSON);
//To convert this into accessible JS object, we parse it using
const dataJS = JSON.parse(dataBufferToJSON);
console.log(dataJS.title); */


//Challenge Time
/* 
1) Read the data from JSON and parse it to JS
2) Change the name and age and replace it with your data
3) Stringify the Object and overwrite it in the file
4) Test your code
*/

const dataBuffer = fs.readFileSync('1-jsondata.json');
console.log(dataBuffer);
const dataBufferToJSON = dataBuffer.toString();
const dataJS = JSON.parse(dataBufferToJSON);
console.log(dataJS);

//Change the name and age and write back JSON data to file
dataJS.name = 'Sahil';
dataJS.age = 29;
console.log(dataJS);

//To convert the JS data to JSON and write it back.
const personalDataJSON = JSON.stringify(dataJS);
fs.writeFileSync('1-jsondata.json',personalDataJSON);