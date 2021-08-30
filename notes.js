const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  notes.push({ title, body });
  saveNote(notes);
  console.log("Note added");
};

function saveNote(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
}

function loadNotes() {
  try {
    const bufferNotes = fs.readFileSync("notes.json");
    const notes = bufferNotes.toString();

    return JSON.parse(notes);
  } catch (error) {
    return [];
  }
}

module.exports = {
  getNotes,
  addNote,
};
