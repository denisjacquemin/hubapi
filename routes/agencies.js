var agency = require('../models/agency');
var express = require('express');
var router = express.Router();


router.route('/agencies').get(function(req, res) {
    agency.find(function(err, agencies) {
        if (err) {
            return res.send(err);
        }

        res.json(agencies);
    });
});


router.route('/agencies').post(function(req, res) {
    var agency = new agency(req.body);

    agency.save(function(err) {
        if (err) {
            return res.send(err);
        }

        res.send({ message: 'agency Added' });
    });
});

router.route('/agencies/:id').put(function(req,res){
    agency.findOne({ _id: req.params.id }, function(err, agency) {
        if (err) {
            return res.send(err);
        }

        for (prop in req.body) {
            agency[prop] = req.body[prop];
        }

        // save the movie
        agency.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'agency updated!' });
        });
    });
});

router.route('/agencies/:id').get(function(req, res) {
    agency.findOne({ _id: req.params.id}, function(err, agency) {
        if (err) {
            return res.send(err);
        }

        res.json(agency);
    });
});

router.route('/agencies/:id').delete(function(req, res) {
    agency.remove({
        _id: req.params.id
    }, function(err, agency) {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;