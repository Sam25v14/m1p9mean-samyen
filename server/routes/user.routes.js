var express = require("express");
var router = express.Router();
const {
  hashAndUpdateAllPassword,
  login,
} = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res, next) {
  const userCredentials = { ...req.body };
  login(userCredentials, (error, user) => {
    if (error) return next(error);

    res.json(user);
  });
});

router.put("/updatePassword", function (req, res, next) {
  hashAndUpdateAllPassword((error) => {
    if (error) {
      next(error);
    }
  }).then(() => {
    res.status(200).send("password hashed!");
  });
});

module.exports = router;
