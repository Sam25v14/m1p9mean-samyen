const mongoose = require("mongoose");
require("./commande");
require("./user");

const LivraisonSchema = new mongoose.Schema({
  commandes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Commande", required: true },
  ],
  livreur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  adresse: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  etat: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Livraison", LivraisonSchema, "livraison");
