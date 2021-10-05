const express = require("express");
const router = express.Router();
const GraphicCard = require("../models/GraphicCard");

// GET
router.get("/", (req, res, next) => {
  GraphicCard.find({}).exec((err, graphicsCards) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(graphicsCards);
  });
});

// DETAILS
router.get("/:id", (req, res, next) => {
  GraphicCard.findById(req.params.id)
    .then((graphicsCard) => res.json(graphicsCard))
    .catch((e) => next(e));
});

module.exports = router;
