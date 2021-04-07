var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var shirt_controller = require('../controllers/shirt');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Shirt ROUTES ///
// POST request for creating a Shirt.
router.post('/resource/shirt', shirt_controller.shirt_create_post);
// DELETE request to delete Shirt.
router.delete('/resource/shirt/:id', shirt_controller.shirt_delete);
// PUT request to update Shirt.
router.put('/resource/shirt/:id', shirt_controller.shirt_update_put);
// GET request for one Shirt.
router.get('/resource/shirt/:id', shirt_controller.shirt_detail);
// GET request for list of all Shirt items.
router.get('/resource/shirt', shirt_controller.shirt_list);

module.exports = router;