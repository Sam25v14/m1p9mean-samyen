var express = require("express");
var router = express.Router();
const {
  hashAndUpdateAllPassword,
  login,
  hashPassword,
  register
} = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res, next) {
  login(req.body, (error, user) => {
    if (error) return next(error);

    res.json(user);
  });
});

router.post("/register", function (req, res, next) {
  register(req.body, (error, user) => {
    if (error) return next(error);

    res.json(user);
  });
});

router.post("/hashPassword", function (req, res, next) {
  hashPassword(req.body.password, (error, hash) => {
    if (error) return next(error);

    res.send(hash);
  });
});

router.put("/updatePassword", function (req, res, next) {
  hashAndUpdateAllPassword((error) => {
    if (error) {
      next(error);
    }
  }).then(() => {
    res.send("password hashed!");
  });
});

module.exports = router;
