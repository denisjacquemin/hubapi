var Prospect = require('../models/prospect');
var express = require('express');
var router = express.Router();

// list
router.route('/prospects').get(function(req, res) {
    Prospect.find(function(err, prospects) {
        if (err) {
            return res.send(err);
        }

        res.json(prospects);
    });
});


router.route('/prospects').post(function(req, res) {

    var prospect = new Prospect(req.body);

    prospect.created_at = new Date();  // set createdAt to current datetime
    prospect.updated_at = new Date();

    prospect.save(function(err) {
        if (err) {
            return res.send(err);
        }

        res.send({ message: 'prospect Added' });
    });
});

router.route('/prospects/:id').put(function(req,res){

    var prospect = req.body;
    prospect.updated_at = new Date();

    console.log(req.params.id);
    console.log(prospect);

    Prospect.findByIdAndUpdate(
        req.params.id,
        req.body,
        function(err) {
            if (err) {
                return res.json(err);
            }

            res.json({ message: 'Prospect updated!' });
        }
    );

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