const createHttpError = require("http-errors");
const Commande = require("../models/commande");

const updateQuantite = (params, updates, next) => {
  const filters = {
    _id: params.id,
    "plats.plat": params.plat,
  };
  const sets = {
    $set: {
      "plats.$.quantite": updates.quantite,
    },
  };
  Commande.findOneAndUpdate(filters, sets, (err, result) => {
    if (err) return next(err);

    next(null, result);
  });
};

module.exports = {
  updateQuantite,
};
