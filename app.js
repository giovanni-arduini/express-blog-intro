console.log("Hello blog!");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

posts = [
  {
    title: "Ciambellone",
    content: "La ricetta del ciambellone",
    immainge: "/imgs/ciambellone.jpeg",
    tags: ["#classico", "#leggero", "#veloce"],
  },
  {
    title: "Cracker di barbabietola",
    content: "La ricetta del cracker di barbabietola",
    immainge: "/imgs/cracker_barbabietola.jpeg",
    tags: ["#sfizioso", "#colorato", "#aperitivo"],
  },
  {
    title: "Pane fritto dolce",
    content: "La ricetta del pane fritto dolce",
    immainge: "/imgs/pane_fritto_dolce.jpeg",
    tags: ["#goloso", "#salato", "#aperitivo"],
  },
  {
    title: "Pasta di barbabietola",
    content: "La ricetta della pasta di barbabietola",
    immainge: "/imgs/pasta_brarbabietola.jpeg",
    tags: ["#colorato", "#primipiatti", "#leggero"],
  },
  {
    title: "Torta paesana",
    content: "La ricetta della torta paesana",
    immainge: "/imgs/torta_paesana.jpeg",
    tags: ["#tradizionale", "#autunnale", "#goloso"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({
    posts: posts,
    count: posts.length,
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
