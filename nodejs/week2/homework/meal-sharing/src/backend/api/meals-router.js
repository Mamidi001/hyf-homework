const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

router.get("/", async (req, res) => {
  let dataOfMeal = meals;

  if ("date" in req.query) {
    try {
      dataOfMeal = dataOfMeal.filter(
        (meal) =>
          new Date(meal.createdAt).getTime() >
          new Date(req.query.date).getTime()
      );
      if (dataOfMeal.length > 0) {
        res.json(dataOfMeal);
      } else {
        res.status(404);
        res.send("there is no such meal date,Pls check");
      }
    } catch (error) {
      throw error;
    }
  }

  if ("maxPrice" in req.query) {
    dataOfMeal = meals.filter(
      (meal) => Number(meal.price) <= Number(req.query.maxPrice)
    );

    if (dataOfMeal.length > 0) {
      res.json(dataOfMeal);
    } else {
      res.status(404);
      res.send("there is no such meal id,Pls check");
    }
  }

  if ("title" in req.query) {
    dataOfMeal = meals.filter((meal) =>
      meal.title.toLowerCase().includes(req.query.title.toLowerCase())
    );

    if (dataOfMeal.length > 0) {
      res.json(dataOfMeal);
    } else {
      res.status(404).send("Sorry,No such meals in the menu");
    }
  }

  if ("limit" in req.query) {
    const mealsNew = meals.map((meal) => meal);
    const limitNo = Number(req.query.limit);
    dataOfMeal = mealsNew.slice(0, limitNo);

    if (limitNo <= mealsNew.length && limitNo > 0) {
      res.json(dataOfMeal);
    } else {
      res
        .status(404)
        .send(`Sorry,there is only ${mealsNew.length} meals left.`);
    }
  } else {
    res.json(dataOfMeal); // no one is match just show the whole data
  }
});

module.exports = router;

// router.get("/", function (req, res) {
//   const getMaxPrice = req.query.maxPrice;
//   if (getMaxPrice) {
//     const getPrice = meals.filter((meal) => meal.price <= maxPrice);
//     return res.json(getPrice);
//   }
//   const queryTitle = req.query.title.toLowerCase();
//   if (queryTitle) {
//     const getTitle = meals.filter((meal) =>
//       meal.title.toLowerCase().includes(queryTitle)
//     );
//     return res.json(getTitle);
//   }
//   const queryCreatedAfter = req.query.createdAfter;
//   if (queryCreatedAfter) {
//     const getCreatedDate = meals.filter(
//       (meal) => Date.parse(meal.createdAfter) > Date.parse(createdAfter)
//     );
//     return res.json(getCreatedDate);
//   }
//   const queryLimit = req.query.limit;
//   if (queryLimit) {
//     const getLimitedData = meals.filter((meal) => meal.id < limit);
//     return res.json(getLimitedData);
//   }
//   return res.json(meals);
// });
// router.get("/:id", function (req, res) {
//   const id = Number(req.params.id);
//   const selectedMeals = meals.find((meal) => meal.id === id);
//   res.json(selectedMeals);
// });

// module.exports = router;
