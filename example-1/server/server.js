var express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , expressJwt = require('express-jwt');

var index = require('./routes/index');
var security = require('./routes/security');

var jwtSecret = 'ababhjah12!@_';

var app = express();

app.use(cors());
app.use(bodyParser.json());

//used to verify our token, basically makes all resources protected unless specified in path array
app.use(expressJwt({secret:jwtSecret}).unless({path: ['/login','/jl']}));

app.use('/', index);
app.use('/', security);

app.listen(3000, function(){
    console.log('app listen');
});