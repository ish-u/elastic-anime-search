const express = require("express");
const cors = require("cors");
const malScraper = require("mal-scraper");

// Initaitlizing Express
const app = express();

//cors middleware
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// defining PORT number
const PORT = 5000 || process.env.PORT;

// routes for the Index
app.get("/", (req, res) => {
  res.send("OK");
});

// get the Anime Details
app.get("/getAnime/:id", async (req, res) => {
  await malScraper
    .getInfoFromURL("https://myanimelist.net/anime/" + req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

// Listening for Requests
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
