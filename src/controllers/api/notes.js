const fs = require("fs");
const path = require("path");

// api/notes
const getAllNotes = (req, res) => {
  // read from json file
  const notesJSON = fs.readFileSync(
    path.resolve(__dirname, "../../../db/db.json"),
    "utf-8"
  );

  // parse
  const notes = JSON.parse(notesJSON);
  console.log(notes);

  // return [notes]
  res.json(notes);
};

const createNote = (req, res) => {
  res.send("createNote function");
  // validate post body
  // create new note object
  // use uuid library for id#
  // read from json
  // push
  // write to json file
  // consider moment.js for date on note
};

const deleteANote = (req, res) => {
  res.send("deleteANote function");
  // read from json
  // check if exists
  // extract id from req
  // const { id } = req.params;
  //   return 404 error if doesn't exist
  // remove note w/ filter
  // write to json file
};

module.exports = { getAllNotes, createNote, deleteANote };
