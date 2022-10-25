const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News API");
});

const news = require("./data/news.json")
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  // console.log(req)
  const selectedNews = news.find(n => n._id === id)
  res.send(selectedNews)

})

app.get("/news", (req, res) => {
  res.send(news);
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;


  if (id === '08') {
    res.send(news)
  }
  else {
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews)
  }
})




app.listen(port, () => {
  console.log("Dragon News Running Port", port);
});

const categories = require("./data/Categories.json");
app.get("/news-categories", (req, res) => {
  res.send(categories);
});



