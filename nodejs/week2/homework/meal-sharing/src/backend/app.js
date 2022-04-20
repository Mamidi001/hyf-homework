const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");

const reservationRouter = require("./api/reservation-router");
const reviewRouter = require("./api/review-router");

app.use("/api/meals", mealsRouter);
app.use("/api/reservations", reservationRouter);
app.use("/api/reviews", reviewRouter);



module.exports = app;
