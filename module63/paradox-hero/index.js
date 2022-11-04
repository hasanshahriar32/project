const express = require("express");
const app = express();
const port = 5000;
const courses = require("./data/courses.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("paradox hero api");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const coursesItem = courses.find((item) => item.id === id);
  res.json(coursesItem);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
