var express = require("express");
var router = express.Router();
const auth = require("../middlewares/auth");
const Commande = require("../models/commande");
const Controller = require("../controllers/controller");
const { updateQuantite } = require("../controllers/commande.controller");

Controller.init(Commande);
const { create, updateOne } = Controller;

router.get("/", function (req, res, next) {
  Commande.find()
    .populate("plats.plat")
    .exec((err, user) => {
      if (err) return next(err);

      res.json(user);
    });
});

router.post("/commander", function (req, res, next) {
  create(new Commande(req.body), (err, result) => {
    if (err) return next(err);

    res.json(result);
  });
});

router.put("/update", function (req, res, next) {
  const id = req.query.id;

  updateOne(id, req.body, (err, result) => {
    if (err) return next(err);

    res.json(result);
  });
});

router.put("/modifierQte", function (req, res, next) {
  updateQuantite(req.query, req.body, (err, result) => {
    if (err) return next(err);

    res.json(result);
  });
});

module.exports = router;
