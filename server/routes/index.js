var express = require('express');
var router = express.Router();
const UserProfile = require('../models/user-profile');

router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  UserProfile.find({}, (err, data) => {
    if(err) console.log(err);

    res.json(data);
  });
  
});

module.exports = router;
