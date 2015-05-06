var express = require('express'),
    router = express.Router(),
    faker = require('faker');

router.get('/jl', function(req,res,next){
    res.json({msg: 'this is cors-enabled for all origins!'});
});

router.get('/random-user', function(req, res){
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.json(user);
});

module.exports = router;
