var express = require('express');
const shirt_controllers= require('../controllers/shirt');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET shirt */
router.get('/', shirt_controllers.shirt_view_all_Page);

/* GET detail costume page */
router.get('/detail', shirt_controllers.shirt_view_one_Page);

/* GET create costume page */
router.get('/create', shirt_controllers.shirt_create_Page);

/* GET create update page */
router.get('/update', secured, shirt_controllers.shirt_update_Page);


module.exports = router;