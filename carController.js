// contactController.js

// Import car model
Car = require('./carModel');
// Handle index actions
exports.index = function (req, res) {
    Car.get(function (err, cars) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Information retrieved successfully",
            data: cars
        });
    });
};

// Handle create car actions
exports.new = function (req, res) {
    var car = new Car();
    car.licenseplatenumber = req.body.licenseplatenumber ? req.body.licenseplatenumber : car.licenseplatenumber;
    car.company = req.body.company;
    car.model = req.body.model;
    car.horsepower= req.body.horsepower;
    car.fabricationyear= req.body.fabricationyear;
    car.color=req.body.color;
    car.type= req.body.type;


// save the car and check for errors
    car.save(function (err) {
        // if (err)                                                 //esto si lo quito es bueno ?, el comentario
        //     res.json(err);                       
res.json({
            message: 'New car created!',
            data: car
        });
    });
};


// Handle view car info
exports.view = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {       //DUDA sobre el "objeto_id"
        if (err)
            res.send(err);
        res.json({
            message: 'Car information loading..',
            data: car
        });
    });
};


// Handle update car info
exports.update = function (req, res) {
Car.findById(req.params.car_id, function (err, car) {                   //otra instancia de la duda objeto_id
        if (err)
            res.send(err);
        car.licenseplatenumber = req.body.licenseplatenumber ? req.body.licenseplatenumber : car.licenseplatenumber;
        car.company=req.body.company;
        car.model = req.body.model;
        car.horsepower= req.body.horsepower;
        car.fabricationyear= req.body.fabricationyear;
        car.color=req.body.color;
        car.type= req.body.type;



// save the car info and check for errors
        car.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Car Info updated',
                data: car
            });
        });
    });
};


// Handle delete car
exports.delete = function (req, res) {
    Car.remove({
        _id: req.params.car_id                  //este _id de donde sale. Lo tengo que haber creado? 
    }, function (err, car) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Car information deleted'
        });
    });
};