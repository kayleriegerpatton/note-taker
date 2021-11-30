// const fs = require("fs");
// const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { readNotesFromFile, writeNoteToFile } = require("../../../src/utils");

// api/notes
const getAllNotes = (req, res) => {
  const notes = readNotesFromFile();
  console.log(notes);

  // return [notes]
  res.json(notes);
};

const createNote = (req, res) => {
  const newNotePayload = req.body;

  // validate post body
  const validKeys = ["title", "text"];
  const isValidKey = validKeys.every((key) =>
    Object.keys(newNotePayload).includes(key)
  );

  if (isValidKey) {
    // create new note object w/ uuid
    const newNote = {
      id: uuidv4(),
      ...newNotePayload,
    };
    // read from json
    const notes = readNotesFromFile();

    // push
    notes.push(newNote);

    // write to json file
    writeNoteToFile(JSON.stringify(notes));

    // consider moment.js for date on note
    return res.json(newNote);
  }

  return res.status(400).json({ message: "Invalid request entry." });
};

const deleteANote = (req, res) => {
  // extract id from req
  const { id } = req.params;

  // read from json
  const notes = readNotesFromFile();

  // check if id exists
  const note = notes.find((note) => note.id === id);

  if (note) {
    // remove note w/ .filter
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });

    // write to json file
    writeNoteToFile(JSON.stringify(newNotes));

    return res.json(newNotes);
  }
  //   return error if id doesn't exist
  return res.status(404).json({
    message: `No note with ID ${id}`,
  });
};

module.exports = { getAllNotes, createNote, deleteANote };
