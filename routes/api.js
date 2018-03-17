const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');

// Get a list of ninjas from the db.
router.get('/ninjas', function(req, res, next) {
    res.send({
        type: 'GET',
    });
});

router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja);
    }).catch(next) ;
});

router.put('/ninjas/:id', function(req, res, next) {
    res.send({
        type: 'PUT',
    })
});

router.delete('/ninjas/:id', function(req, res, next) {
    res.send({
        type: 'DELETE',
    })
});


module.exports = router;