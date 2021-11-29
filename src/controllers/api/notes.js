const getAllNotes = (req, res) => {
  // res.send("getAllNotes function");
  // read from json file
  // parse
  // return [notes]
  res.json();
  //
};

const createNote = (req, res) => {
  // validate post body
  // create new note object
  // use uuid library for id#
  // read from json
  // push
  // write to json file
  // consider moment.js for date on note
};

const deleteANote = (req, res) => {
  // read from json
  // check if exists
  // extract id from req
  const { id } = req.params;
  //   return 404 error if doesn't exist
  // remove note w/ filter
  // write to json file
};

module.exports = { getAllNotes, createNote, deleteANote };
