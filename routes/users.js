var express = require('express');
var router = express.Router();
const users = require('./users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

/* POST users. */
router.post('/', function(req, res, next) {
  users.push(req.body)
  res.status(201).end()
});

module.exports = router;
