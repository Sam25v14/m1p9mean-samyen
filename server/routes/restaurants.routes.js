var express = require("express");
var router = express.Router();
const auth = require("../middlewares/auth");
const Restaurant = require("../models/restaurant");
const Controller = require("../controllers/controller");

Controller.init(Restaurant);
const { create, updateOne } = Controller;

router.get("/all", function (req, res, next) {
    Restaurant.find()
    // .populate('plats')
    .exec((err, user) => {
      if (err) return next(err);

      res.json(user);
    });
});

router.post("/add", function (req, res, next) {
    create(new Restaurant(req.body), (err, result) => {
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