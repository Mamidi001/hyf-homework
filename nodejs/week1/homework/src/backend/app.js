const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
const selectedMeals = meals.map((meal) => {
  const selectReview = reviews.filter((review) => meal.id === review.mealId);
  return {
    ...meal,
    review: selectReview,
  };
});
// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("hello world");
});
app.get("/meals", async (request, response) => {
  response.send(selectedMeals);
});
app.get("/cheap-meals", async (request, response) => {
  const cheapMeal = selectedMeals.filter((cheapMeal) => cheapMeal.price < 100);
  response.send(cheapMeal);
});
app.get("/large-meals", async (request, response) => {
  const largeMeal = selectedMeals.filter(
    (largeMeal) => largeMeal.maxNumberOfGuests < 10
  );
  response.send(largeMeal);
});
app.get("/meal", async (request, response) => {
  const randomMealIndex = Math.floor(Math.random() * selectedMeals.length);
  const randomMeal = selectedMeals[randomMealIndex];
  response.send(randomMeal);
});
app.get("/reservations", async (request, response) => {
  //const allReservations = reservations.map((reservation) => reservation);
  response.send(reservations);
});
app.get("/reservation", async (request, response) => {
  const randomReservationIndex = Math.floor(
    Math.random() * reservations.length
  );
  const randomReservation = selectedMeals[randomReservationIndex];
  response.send(randomReservation);
});

module.exports = app;
