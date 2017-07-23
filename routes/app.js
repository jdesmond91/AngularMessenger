var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// colon indicates that it is a variable that was passed
router.get('/message/:msg', function(req, res, next) {
    res.render('node', { message: req.params.msg });
});

router.post('/message', function(req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});

module.exports = router;
