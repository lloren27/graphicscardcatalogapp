const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GraphicCardSchema = new Schema({
  name: String,
  image: String,
  manufacturer: String,
  model: String,
  assembler: String,
  price: String,
});

const GraphicCard = mongoose.model("GrapicCard", GraphicCardSchema);
module.exports = GraphicCard;
