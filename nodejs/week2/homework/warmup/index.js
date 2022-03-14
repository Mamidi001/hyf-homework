const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", function (req, res) {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  const sum = first + second;
  if (first && second) {
    res.send(`The sum is: ${sum}`);
  } else if (first) {
    res.send(`you entered only first value ${first}`);
  } else if (second) {
    res.send(`you entered only first ${second}`);
  }
});
app.get("/numbers/multiply/:first/:second", (req, res) => {
  const firstValue = parseInt(req.params.first);
  const secValue = parseInt(req.params.second);
  res.send(`${firstValue * secValue}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
