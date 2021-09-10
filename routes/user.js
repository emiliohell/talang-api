var express = require('express');
var router = express.Router();
const users = require('./users.json');


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let userId = req.params.id
  console.log(users)
  console.log(userId)
  const result = users.filter(user => user.id === userId);
  console.log(result)
  res.send(result)
});




module.exports = router;
