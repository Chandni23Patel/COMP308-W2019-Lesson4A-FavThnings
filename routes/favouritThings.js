let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the contact model
let favThings = require('../models/favouritThings');

/* GET contact list page - READ */
router.get('/', (req, res, next) => {
    contact.find((err, list) => {
        
        if(err) {
            return console.error(err);
        }
        else {
            console.log(list);
            
            res.render('favouritThings/index', {
                title: 'Favourit Things',
                list: list
            });
            
        }
    })
});


module.exports = router;