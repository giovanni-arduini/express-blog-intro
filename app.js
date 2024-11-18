console.log("Hello blog!");

const express = require("express");
const app = express();
const port = 3000;

posts = [
  {
    title: "Ciambellone",
    content: "La ricetta del ciambellone",
    immainge: "imgs/ciambellone.jpeg",
    tags: ["farina", "burro", "estratto vaniglia"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
