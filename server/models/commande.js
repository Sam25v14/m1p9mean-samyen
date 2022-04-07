const mongoose = require("mongoose");
require("./plat");
require("./user");
require("./restaurant");

const CommandeSchema = new mongoose.Schema({
  plats: [
    {
      plat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plat",
        required: true,
      },
      quantite: { type: Number, required: true },
    },
  ],
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  etat: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Commande", CommandeSchema, "commande");
