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

module.exports = router;
