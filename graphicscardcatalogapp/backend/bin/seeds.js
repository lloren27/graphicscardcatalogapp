const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/graphic-cards-database");

const GraphicCard = require("../models/GraphicCard");

const graphicsCards = require("./graphicCards.json");

GraphicCard.create(graphicsCards, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${graphicsCards.length} graphicsCards`);
});
