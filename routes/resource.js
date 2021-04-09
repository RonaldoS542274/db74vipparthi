var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shirt_controller = require('../controllers/shirt');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Smartphone.
router.post('/shirt', shirt_controller.shirt_create_post);
// DELETE request to delete Smartphone.
router.delete('/shirt/:id', shirt_controller.shirt_delete);
// PUT request to update Shirt.
router.put('/shirt/:id', shirt_controller.shirt_update_put);
// GET request for one Shirt.
router.get('/shirt/:id', shirt_controller.shirt_detail);
// GET request for list of all Shirt items.
router.get('/shirt', shirt_controller.shirt_list);

module.exports = router;