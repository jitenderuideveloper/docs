const app = require('express');
const router = app.Router();
const mongoose = require('mongoose');
require('../models/user.model');

const User = mongoose.model('User');

router.post('/sign-up', (req, res, next) => {
    
    var user = new User({ 
        fullName: req.body.fullName, 
        email:req.body.email,
        password: req.body.password
    });

    //var user = new User();
    //user.fullName = req.body.fullName;
    //user.email = req.body.email;
    //user.password = req.body.password;

    user.save((err, result) => {
        if (!err)
            res.send(result);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
});

module.exports = router;





