console.log("This is the utility file");
const name = "Sahil";

const add = (a,b) => {return a+b;}

//This concept is used to export all the variables,objects and methods to be accessed outside of this file.
module.exports = add;