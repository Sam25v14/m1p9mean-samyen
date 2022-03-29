var express = require("express");
var router = express.Router();
const UserProfile = require("../models/user-profile");
const userRouter = require("./user.routes");


router.get("/", function (req, res) {
  UserProfile.find({}, (err, data) => {
    if (err) console.log(err);

    res.json(data);
  });
});

router.use("/user", userRouter);

module.exports = router;
