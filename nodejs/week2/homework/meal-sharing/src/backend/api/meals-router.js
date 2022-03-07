const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

router.get("/", function (req, res) {
  const getMaxPrice = req.query.maxPrice;
  if (getMaxPrice) {
    const getPrice = meals.filter((meal) => meal.price <= maxPrice);
    return res.json(getPrice);
  }
  const queryTitle = req.query.title.toLowerCase();
  if (queryTitle) {
    const getTitle = meals.filter((meal) =>
      meal.title.toLowerCase().includes(queryTitle)
    );
    return res.json(getTitle);
  }
  const queryCreatedAfter = req.query.createdAfter;
  if (queryCreatedAfter) {
    const getCreatedDate = meals.filter(
      (meal) => Date.parse(meal.createdAfter) > Date.parse(createdAfter)
    );
    return res.json(getCreatedDate);
  }

  const queryLimit = req.query.limit;
  if (queryLimit) {
    const getLimitedData = meals.filter((meal) => meal.id < limit);
    return res.json(getLimitedData);
  }
  return res.json(meals);
});

router.get("/:id", function (req, res) {
  const id = Number(req.params.id);
  const selectedMeals = meals.find((meal) => meal.id === id);
  res.json(selectedMeals);
});

module.exports = router;
