const express = require("express");

const app = express();
const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
