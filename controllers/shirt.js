var shirt = require('../models/shirt');
// List of all Shirt
//exports.shirt_list = function(req, res) {
// res.send('NOT IMPLEMENTED: shirt list');
//};

// List of all Costumes
exports.shirt_list = async function(req, res) {
    try{
    theshirt = await shirt.find();
    res.send(theshirt);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

    // for a specific Shirt.
exports.shirt_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await shirt.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Shirt create on POST.
//exports.shirt_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: shirt create POST');
//};


exports.shirt_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shirt();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.cost = req.body.cost;
    document.brand = req.body.brand;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };


// Handle Shirt delete form on DELETE.
exports.shirt_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt delete DELETE ' + req.params.id);
};
// Handle Shirt update form on PUT.
exports.shirt_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.shirt_view_all_Page = async function(req, res) {
    try{
    shirt = await shirt.find();
    res.render('shirt', { title: 'shirt Search Results', results: shirts });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };