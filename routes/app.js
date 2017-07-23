var express = require('express');
var router = express.Router();
var User = require('../models/user'); // import our User model

/* GET home page. */
router.get('/', function(req, res, next) {
    // {} pulls the first one in the DB
    User.findOne({}, function(err, doc) {
        if(err) {
            return res.send('Error!');
        }
        res.render('node', { email: doc.email });
    })
});

/* Below was just for practice, will leave in here for
// colon indicates that it is a variable that was passed
router.get('/message/:msg', function(req, res, next) {
    res.render('node', { message: req.params.msg });
});*/

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName:  'JD',
        lastName: 'Test',
        password: 'supersecret',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
