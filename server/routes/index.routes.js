var express = require("express");
var router = express.Router();
const User = require("../models/user");
const userRouter = require("./user.routes");
const commandeRouter = require("./commande.routes");
const platRouter = require("./plat.routes");
const restaurantRouter = require("./restaurants.routes");
const auth = require("../middlewares/auth");
const restrict = require("../middlewares/restrict");

router.get("/", auth, restrict({ profile: "client" }), function (req, res, next) {
  User.find()
    .populate("profile")
    .exec((err, user) => {
      if (err) return next(err);

      res.json(user);
    });
});

router.use("/user", userRouter);
router.use("/commande", commandeRouter);
router.use("/restaurant", restaurantRouter);
router.use("/plat", platRouter);

module.exports = router;
