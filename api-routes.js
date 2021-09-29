// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working\n',
        message: 'Welcome to RESTHub crafted with love!'
    });
});


// Import contact controller
var carController=require('./carController');
// Contact routes
router.route('/cars')
    .get(carController.index)
    .post(carController.new);
router.route('/cars/:car_id')
    .get(carController.view)
    .put(carController.update)
    .delete(carController.delete);

// Export API routes
module.exports = router;