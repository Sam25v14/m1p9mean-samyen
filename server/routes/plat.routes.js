var express = require("express");
var router = express.Router();
const auth = require("../middlewares/auth");
const Plat = require("../models/plat");
const Controller = require("../controllers/controller");

Controller.init(Plat);
const { create, updateOne } = Controller;

router.get("/", function (req, res, next) {
    Plat.find()
    .populate("categorie")
    .exec((err, plats) => {
      if (err) return next(err);

      res.json(plats);
    });
});

router.post("/add", function (req, res, next) {
    create(new Plat(req.body), (err, result) => {
        if(err) return next(err);

        res.json(result);
    });
});

router.put("/update", function (req, res, next) {
    const id = req.query.id;

    updateOne(id, req.body, (err, result) => {
        if(err) return next(err);

        res.json(result);
    });
});

module.exports = router;