var prospect = require('../models/prospect');
var express = require('express');
var router = express.Router();


router.route('/prospects').get(function(req, res) {
    prospect.find(function(err, prospects) {
        if (err) {
            return res.send(err);
        }

        res.json(prospects);
    });
});


router.route('/prospects').post(function(req, res) {
    var prospect = new prospect(req.body);

    prospect.save(function(err) {
        if (err) {
            return res.send(err);
        }

        res.send({ message: 'prospect Added' });
    });
});

router.route('/prospects/:id').put(function(req,res){
    prospect.findOne({ _id: req.params.id }, function(err, prospect) {
        if (err) {
            return res.send(err);
        }

        for (prop in req.body) {
            prospect[prop] = req.body[prop];
        }

        // save the movie
        prospect.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'prospect updated!' });
        });
    });
});

router.route('/prospects/:id').get(function(req, res) {
    prospect.findOne({ _id: req.params.id}, function(err, prospect) {
        if (err) {
            return res.send(err);
        }

        res.json(prospect);
    });
});

router.route('/prospects/:id').delete(function(req, res) {
    prospect.remove({
        _id: req.params.id
    }, function(err, prospect) {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;