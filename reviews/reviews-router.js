const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const Reviews = require('./reviews-model');

router.get('/', (req, res) => {
    Reviews.find()
        .then(reviews => {
            res.status(200).json(reviews);
        })
        .catch(err => res.send(err))
})




module.exports = router;