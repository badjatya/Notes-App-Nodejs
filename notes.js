const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  let duplicateTitle = notes.find((note) => note.title === title);

  if (!duplicateTitle) {
    notes.push({ title, body });
    saveNote(notes);
    console.log(chalk.green.bold("Note added"));
  } else {
    console.log(chalk.red.bold("Title already exits..."));
  }
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
