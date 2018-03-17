const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);
app.use(function(err, req, res, next) {
    console.info(err);
});

app.get('/api', function(req, res) {
    console.log('Get request');

    // res.write('xxx');
    // res.end();

    res.send({name: 'zark'})
});



app.listen(process.env.port || 4000, function() {
    console.log('now listening for requests');
});