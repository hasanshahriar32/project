const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const phones = require("./phones.json");
app.use(cors());
app.get("/", (req, res) => res.send("Hello World! from Express!!!!!!"));

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  const phone = phones.data.find((ph) => ph.id === id) || {};
  res.send(phone);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
