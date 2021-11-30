const path = require("path");

// send notes.html file
const renderNotes = (fileName) => (req, res) => {
  //   send file to page
  const filePath = path.join(__dirname, `../../../public/${fileName}.html`);

  res.sendFile(filePath);
};

module.exports = { renderNotes };
