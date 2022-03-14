const express = require("express");
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

//add
app.get("/calculator/add", (req, res) => {
  const firstValue = req.query.firstNumber;
  const secValue = req.query.secondNumber;
  console.log(typeof secValue);
  if (Array.isArray(req.query.secondNumber)) {
    const result =
      req.query.secondNumber
        .map((secValue) => secValue)
        .reduce((valueOne, valueTwo) => Number(valueOne) + Number(valueTwo)) +
      Number(firstValue);
    res.send(`${result}`);
  }
  res.send(`${Number(firstValue) + Number(secValue)}`);
});

//subtraction
app.get("/calculator/subtraction", (req, res) => {
  const firstValue = Number(req.query.firstNumber);
  const secValue = Number(req.query.secondNumber);
  console.log(typeof secValue);
  if (Array.isArray(req.query.secondNumber)) {
    const result = req.query.secondNumber
      .map((secValue) => secValue)
      .reduce((valueOne, valueTwo) => Number(valueOne) + Number(valueTwo));

    res.json(firstValue - result);
  }
  res.json(firstValue - secValue);
});

//multiply
app.get("/calculator/multiply", (req, res) => {
  const firstValue = Number(req.query.firstNumber);
  const secValue = Number(req.query.secondNumber);
  console.log(typeof secValue);
  if (Array.isArray(req.query.secondNumber)) {
    const result = req.query.secondNumber
      .map((secValue) => secValue)
      .reduce((valueOne, valueTwo) => Number(valueOne) * Number(valueTwo));

    res.json(firstValue * result);
  }
  res.json(firstValue * secValue);
});
//division
app.get("/calculator/division", (req, res) => {
  const firstValue = Number(req.query.firstNumber);
  const secValue = Number(req.query.secondNumber);
  console.log(typeof secValue);
  if (Array.isArray(req.query.secondNumber)) {
    const result = req.query.secondNumber
      .map((secValue) => secValue)
      .reduce((valueOne, valueTwo) => Number(valueOne) / Number(valueTwo));

    res.json(firstValue / result);
  }
  res.json(firstValue / secValue);
});
//post division
app.post("/calculator/division", (req, res) => {
  const firstValue = Number(req.body.firstNumber);
  const secValue = Number(req.body.secondNumber);
  console.log(typeof secValue);
  if (Array.isArray(req.body.secondNumber)) {
    const result = req.body.secondNumber
      .map((secValue) => secValue)
      .reduce((valueOne, valueTwo) => Number(valueOne) / Number(valueTwo));

    res.json(firstValue / result);
  }
  res.json(firstValue / secValue);
});

//post multiply
app.post("/calculator/multiply", (req, res) => {
  const firstValue = Number(req.body.firstNumber);
  const secValue = Number(req.body.secondNumber);
  console.log(typeof secValue);
  if (Array.isArray(req.body.secondNumber)) {
    const result = req.body.secondNumber
      .map((secValue) => secValue)
      .reduce((valueOne, valueTwo) => Number(valueOne) * Number(valueTwo));

    res.json(firstValue * result);
  }
  res.json(firstValue * secValue);
});

//another method
//Getting data through the request body using POST
//multiply
app.post("/calculator/multiply", (req, res) => {
  if (!req.query.firstNumber || !req.query.secondNumber) {
    res.status(400).send("provide correct information");
    return;
  }
  const firstValue = parseInt(req.query.firstNumber);
  const secValue = parseInt(req.query.secondNumber);
  res.send(`${firstValue * secValue}`);
});
//division
app.post("/calculator/division", (req, res) => {
  const firstValue = parseInt(req.query.firstNumber);
  const secValue = parseInt(req.query.secondNumber);
  res.send(`${firstValue / secValue}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
