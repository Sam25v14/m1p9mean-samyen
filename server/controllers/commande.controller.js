const createHttpError = require("http-errors");
const Controller = require("../controllers/controller");
const Commande = require("../models/commande");

Controller.init(Commande);
const { create } = Controller;

const commander = (commandeInfo, next) => {
  const { restaurant, plat, quantite } = commandeInfo;
  const filters = {
    "plats.plat": plat,
    restaurant: restaurant,
    etat: 1,
  };

  Commande.findOneAndUpdate(
    filters,
    { $inc: { "plats.$.quantite": quantite } },
    (err, commande) => {
      if(err) return next(err);
      next(null, commande);
    }
  );
};

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
  commander
};
