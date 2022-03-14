const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Gain chat backend");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
