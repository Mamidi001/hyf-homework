const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/number/add", function (req, res) {
  const first = Number(req.query.first);
  const second = Number(req.query.second);
  const sum = first + second;
  res.send(`${sum}`);
});
app.get("/number/multiply", function (req, res) {
  const first = Number(req.params.first);
  const second = Number(req.params.second);
  const sum = first * second;
  res.send(`${sum}`);
}),
  app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
