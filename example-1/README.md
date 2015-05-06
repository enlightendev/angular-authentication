## About
Simple example to demonstrate angular client authenticating using jwt.

This example serves protected endpoints that can only be accessed when a bearer token is provided to each
endpoint request.

## node packages

#### nodemon
used to monitor changes to server side code

- npm install nodemon -g

#### http-server
used to serve content in public folder.

- npm install http-server -g
- cd into public folder and run: `http-server`

#### cors
used to allow cross origin requests, i.e. request from clients not served by same server process.

- npm install cors --save
- https://www.npmjs.com/package/cors

#### body-parser
parse the body so you can access parameters in requests in req.body. e.g. req.body.name.

- npm install body-parser --save
- https://github.com/expressjs/body-parser

#### jsonwebtoken
used to create authentication token when client logs in.

- npm install jsonwebtoken --save

#### express-jwt
Middleware that validates JsonWebTokens and sets req.user.

- https://github.com/auth0/express-jwt


## Angular
- create public directory
- run: bower init
- run: bower install angular --save
- run: bower install bootstrap --save
- 

## TODO
- try alternative library for jwt: https://github.com/auth0/angular-jwt

## Reference
- https://thinkster.io/angularjs-jwt-auth/?utm_source=mailinglist&utm_medium=email&utm_campaign=nl-318
- https://thinkster.io/mean-stack-tutorial/
