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


// Handle Costume delete on DELETE.
exports.shirt_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await shirt.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Shirt update form on PUT.
exports.shirt_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await shirt.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.brand) toUpdate.brand = req.body.brand;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.shirt_view_all_Page = async function(req, res) {
    try{
    theshirt = await shirt.find();
    res.render('shirt', { title: 'shirt Search Results', results: theshirt });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.shirt_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await shirt.findById( req.query.id)
        res.render('shirtdetail', 
{ title: 'shirt Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a shirt.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shirt_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('shirtcreate', { title: 'Shirt Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a shirt.
// query provides the id
exports.shirt_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Shirt.findById(req.query.id)
        res.render('shirtupdate', { title: 'Shirt Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

