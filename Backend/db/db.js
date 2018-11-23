const mongoose = require('mongoose');
mongoose.connect('mongodb://mayank83p:mayank83p@ds121192.mlab.com:21192/auth' ,{ useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Mongoose database connected Successfully!!!!');
    } else {
        console.log('Error while connecting to database ' + JSON.stringify(err ,undefined ,2));
    }
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));