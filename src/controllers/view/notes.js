const path = require("path");

const renderNotes = (fileName) => (req, res) => {
  res.send("renderNotes function");

  // send file to page
  //   const filePath = path.join(__dirname, `../../../public/${fileName}.html`);
  //   res.sendFile(filePath);
};

module.exports = { renderNotes };
