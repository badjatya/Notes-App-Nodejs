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

const removeNote = (title) => {
  if (title) {
    const notes = loadNotes();

    // Checking that title exist in json or not
    const isTitleExists = notes.find((note) => note.title === title);

    if (isTitleExists) {
      const newNotes = notes.filter((note) => note.title !== title);
      fs.writeFileSync("notes.json", JSON.stringify(newNotes));
      console.log(chalk.green("Title: " + title + " removed"));
    } else {
      console.log(chalk.red.bold("Title does not exist"));
    }
  } else {
    console.log(chalk.red.bold("Please enter title to be removed"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length !== 0) {
    console.log(chalk.inverse("Your Notes..."));
    notes.map((note, index) => console.log(index + 1 + ". " + note.title));
  } else {
    console.log(chalk.red.inverse("No items in list "));
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
};
