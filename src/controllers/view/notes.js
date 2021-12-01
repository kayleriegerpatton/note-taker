const path = require("path");

// send file to page
const renderNotes = (fileName) => (req, res) => {
  const filePath = path.join(__dirname, `../../../public/${fileName}.html`);

  res.sendFile(filePath);
};

module.exports = { renderNotes };
