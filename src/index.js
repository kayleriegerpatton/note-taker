const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3010;

app.use(express.static("public"));

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
