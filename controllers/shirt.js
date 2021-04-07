var shirt = require('../models/shirt');
// List of all shirt
exports.shirt_list = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt list');
};
// for a specific shirt.
exports.shirt_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt detail: ' + req.params.id);
};
// Handle shirt create on POST.
exports.shirt_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt create POST');
};
// Handle shirt delete form on DELETE.
exports.shirt_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt delete DELETE ' + req.params.id);
};
// Handle shirt update form on PUT.
exports.shirt_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt update PUT' + req.params.id);
};