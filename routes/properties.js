var Property = require('../models/property');
var express = require('express');
var router = express.Router();


router.route('/properties').get(function(req, res) {
    Property.find(function(err, properties) {
        if (err) {
            return res.send(err);
        }

        res.json(properties);
    });
});


router.route('/properties').post(function(req, res) {
    var property = new Property(req.body);

    property.save(function(err) {
        if (err) {
            return res.send(err);
        }

        res.send({ message: 'Property Added' });
    });
});

router.route('/properties/:id').put(function(req,res){
    Property.findOne({ _id: req.params.id }, function(err, property) {
        if (err) {
            return res.send(err);
        }

        for (prop in req.body) {
            property[prop] = req.body[prop];
        }

        // save the movie
        property.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Property updated!' });
        });
    });
});

router.route('/properties/:id').get(function(req, res) {
    Property.findOne({ _id: req.params.id}, function(err, property) {
        if (err) {
            return res.send(err);
        }

        res.json(property);
    });
});

router.route('/properties/:id').delete(function(req, res) {
    Property.remove({
        _id: req.params.id
    }, function(err, property) {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;