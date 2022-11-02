const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("paradox news api");
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const newsItem = news.find((item) => item._id === id);
  res.json(newsItem);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.json(news);
  } else {
    const newsItem = news.filter((item) => item.category_id === id);
    res.json(newsItem);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
