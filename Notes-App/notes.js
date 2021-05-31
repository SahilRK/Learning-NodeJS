const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes..."
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        //Convert from binary to string value
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const addNote = (title,body) => {
    const notes = loadNotes();

    //Check for duplicate notes and return an error message if the note is already taken
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('Note has been added!');
    }else{
        console.log("The note title is already taken! Please add the note with a new title")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const removeNotes = (title) =>{
    const notes = loadNotes();
    
    const noteIndex = notes.findIndex((note) => {
        return note.title === title
    })

    if(noteIndex !== -1){
        notes.splice(noteIndex,1);
        console.log(chalk.green.inverse(`Note with title ${title} has been removed successfully`));
        
        //Restringify the formatted notes array to JSON and write back to file
        saveNotes(notes);

    }else{
        console.log(chalk.red.inverse("Note requested to be deleted has not been found!"))
    }
}

//When you want to export multiple methods or properties from one file to another, we pass an object.
module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNotes: removeNotes
}