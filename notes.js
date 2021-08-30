const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  try {
    const notes = loadNotes();
    notes.push({ title, body });
    fs.writeFileSync("notes.js", notes);
  } catch (error) {
    console.log("Error");
  }
};

function loadNotes() {
  const bufferNotes = fs.readFileSync("notes.js");
  const notes = bufferNotes.toString();

  return JSON.parse(notes);
}

module.exports = {
  getNotes,
  addNote,
};
