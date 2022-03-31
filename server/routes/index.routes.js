var express = require("express");
var router = express.Router();
require("../models/user-profile");
const User = require("../models/user");
const userRouter = require("./user.routes");
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

module.exports = router;