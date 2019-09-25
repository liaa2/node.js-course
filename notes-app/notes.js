const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  // use .find instead of .filter, filter will go through every single one even there is a match
  const duplicateNote = notes.find((note) => note.title === title);

  // DEBUGGING - instead of node app.js, add the option 'inspect' to make debugger working
  // e.g. node inspect app.js add --title="c" --body="t"
  // debugger;

  // open chrome://inspect
  /*
    < Debugger attached.
    < duplicated
    < Waiting for the debugger to disconnect...
    debug>

    Could use 'restart' to restart the debugger after closed the console
  */

  if (!duplicateNote) {
    notes.push({title, body})
    saveNotes(notes); 
    console.log(chalk.green.inverse("duplicated"));
  } else {
    console.log("duplicated");
  }
}

const removeNote = (title) => {
  const allNotes = loadNotes();
  const noteToRemoved = allNotes.findIndex((note) => note.title === title);
  if (noteToRemoved !== -1) {
    allNotes.splice(allNotes[noteToRemoved], 1);
    console.log("removed", allNotes);
    saveNotes(allNotes);
  } else {
    console.log("title not found");   
  }
}

//list all the notes
const listNotes = () => {
  // call the loadNotes() and store in notes
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes'));
  
  notes.forEach((note) => {
    console.log(note.title);
  })
}

//read a specific note based on title
const readNote = (title) => {
  const allNotes = loadNotes();
  const note = allNotes.find(note => note.title === title);
  if(note) {
    console.log(chalk.inverse(note.title));
    console.log(chalk.inverse(note.body));
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}


//load notes from json file
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e){
    return []
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};