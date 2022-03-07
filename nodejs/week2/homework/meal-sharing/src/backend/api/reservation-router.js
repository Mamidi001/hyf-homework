const express = require("express");
const router = express.Router();
const reservation = require("./../data/reservation.json");
const app = express();

router.get("/:id", function (req, res) {
  const id = Number(req.params.id);
  const selectedReservation = reservation.find(
    (reservations) => reservations.id === id
  );
  res.json(selectedReservation);
});
router.get("/", function (req, res) {
  res.json(reservation);
});
module.exports = router;
