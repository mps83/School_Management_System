const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const UserModel = require('./models/users');
require('./auth/auth');
require('./db/db');

const port = 3000 || event.process.port;
const routes = require('./routes/user');
const secureRoute = require('./routes/secure-route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/' , routes);
app.use('/user', passport.authenticate('jwt', {session : false}) , secureRoute);

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.json({error : err });
})

app.listen(port , (err) => {
    if (!err) {
        console.log(`Server started at port ${port}`);
    } else {
        console.log('Error while starting server' + JSON.stringify(err , undefined , 2));
    }
});