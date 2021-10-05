const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/graphic-cards-database");

const GraphicCard = require("../models/GraphicCard");

const graphicCards = [
  {
    name: "Asus ROG Strix GeForce RTX 3090 Gaming OC 24GB GDDR6X",
    image:
      "https://res.cloudinary.com/lloren27/image/upload/v1633270908/graphicCards/1696-asus-rog-strix-geforce-rtx-3090-gaming-oc-24gb-gddr6x.jpg",
    manufacturer: "PcComponentes",
    model: "GeForce RTX ™ 3090",
    assembler: "Asus",
    price: "2699€",
  },
  {
    name: "MSI AMD Radeon RX 6900 XT GAMING Z TRIO 16GB GDDR6",
    image:
      "https://res.cloudinary.com/lloren27/image/upload/v1633270908/graphicCards/1578-msi-amd-radeon-rx-6900-xt-gaming-z-trio-16gb-gddr6.jpg",
    manufacturer: "PcComponentes",
    model: "Radeon RX 6900 XT",
    assembler: "MSI",
    price: "1778€",
  },
  {
    name: "PowerColor Red Devil AMD Radeon RX 6700 XT 12GB GDDR6",
    image:
      "https://res.cloudinary.com/lloren27/image/upload/v1633270908/graphicCards/1335-powercolor-red-devil-amd-radeon-rx-6700-xt-12gb-gddr6.jpg",
    manufacturer: "PcComponentes",
    model: "Radeon RX 6700 XT",
    assembler: "AMD",
    price: "899€",
  },
  {
    name: "MSI GeForce RTX 3070 GAMING Z TRIO LHR 8GB GDDR6",
    image:
      "https://res.cloudinary.com/lloren27/image/upload/v1633270908/graphicCards/1186-msi-geforce-rtx-3070-gaming-z-trio-lhr-8gb-gddr6.jpg",
    manufacturer: "PcComponentes",
    model: "GeForce RTX™ 3070 GAMING Z TRIO 8G LHR",
    assembler: "MSI",
    price: "995€",
  },
];

GraphicCard.create(graphicCards, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${graphicCards.length} grapicCards`);
});
