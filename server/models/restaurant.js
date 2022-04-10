const mongoose = require("mongoose");
require('./plat');

const RestaurantSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  coordonnees: {
    long: { type: Number, required: true },
    lat: { type: Number, required: true },
  },
  date: {
    type: Date,
    required: true,
  },
  plats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plat",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema, "restaurant");
