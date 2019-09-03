const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (request, response) {
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).send('home!');
});

app.post('/create-user', urlencodedParser, function (request, response) {
    let code = 200;
    let secureResponse = 'created'
    let error = 500;
    let errorResponse = 'estallo'


    const uc = new UserController()
    uc.create(request.body);

    response.set('Access-Control-Allow-Origin', '*');
    return response.status(code).send(secureResponse);
    return response.status(error).send(errorResponse);
});

app.listen(9900, () => console.log('Server is running...'));

