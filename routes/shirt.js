var express = require('express');
const shirt_controlers= require('../controllers/shirt');


var router = express.Router();

/* GET shirt */
router.get('/', shirt_controlers.shirt_view_all_Page);

/* GET detail costume page */
router.get('/detail', shirt_controlers.shirt_view_one_Page);

/* GET create costume page */
router.get('/create', shirt_controlers.shirt_create_Page);

/* GET create update page */
router.get('/update', shirt_controlers.shirt_update_Page);


module.exports = router;