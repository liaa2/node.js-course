const fs = require('fs');

const getNotes = function(){
  return 'Your notes....';
}

const addNote = function(title, body){
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({title, body})
    saveNotes(notes); 
  } else {
    console.log("duplicated");
  }
}

const removeNote = function(title){
  const allNotes = loadNotes();
  const noteToRemoved = allNotes.findIndex(function(note){
    return note.title === title;
  })
  if (noteToRemoved !== -1) {
    allNotes.splice(allNotes[noteToRemoved], 1);
    console.log("removed", allNotes);
    saveNotes(allNotes);
  } else {
    console.log("title not found");   
  }
}

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = function(){
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e){
    return []
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
};