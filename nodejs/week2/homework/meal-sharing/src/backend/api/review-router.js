const express = require("express");
const router = express.Router();
const review = require("./../data/review.json");
const app = express();

router.get("/:id", function (req, res) {
  const id = Number(req.params.id);
  const selectedReview = review.find((reviews) => reviews.id === id);
  res.json(selectedReview);
});
router.get("/", function (req, res) {
  res.json(review);
});
module.exports = router;
