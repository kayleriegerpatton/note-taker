const fs = require("fs");
const path = require("path");

const readNotesFromFile = () => {
  // read from json file
  const notesJSON = fs.readFileSync(
    path.join(__dirname, "../db/db.json"),
    "utf-8"
  );

  // parse
  const notes = JSON.parse(notesJSON);
  return notes;
};

const writeNoteToFile = (data) => {
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), data);
};

module.exports = { readNotesFromFile, writeNoteToFile };
