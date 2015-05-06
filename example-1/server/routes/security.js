var express = require('express')
    ,router = express.Router()
    ,jwt = require('jsonwebtoken');

var jwtSecret = 'ababhjah12!@_';

//fake user db
var user = {
    username: 'jlamadrid',
    password: 'password'
};

/**
 *
 */
router.post('/login', authenticate, function(req,res){

    var token = jwt.sign({
        username: user.username
    }, jwtSecret);

    res.send({
        token: token,
        user: user
    });
});

router.get('/me', function(req,res){
    res.send(req.user);
});

//UTIL FUNCTIONS
function authenticate(req,res,next){
    var body = req.body;
    if(!body.username || !body.password){
        res.status(400).end('Must provide username or password');
    }

    if(body.username != user.username || body.password != user.password){
        res.status(401).end('incorrect credentials');
    }
    next();
}

module.exports = router;