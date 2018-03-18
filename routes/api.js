const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');

// Get a list of ninjas from the db.
router.get('/ninjas', function(req, res, next) {
    Ninja.aggregate().near({
        near: {
            type: 'Point',
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        distanceField: "dist.calculated",
        maxDistance: 100000,
        spherical: true
    })
        .then((ninjas) => {
            req.send(ninjas);
        })
        .catch(next);
});

router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja);
    }).catch(next) ;
});

router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(ninja => {
        res.send(ninja);
    });
});

router.delete('/ninjas/:id', function(req, res, next) {
    console.info({_id: req.params.id});
    Ninja.findByIdAndRemove(req.params.id).then((ninja) => {
        res.send(ninja);
    })
});


module.exports = router;