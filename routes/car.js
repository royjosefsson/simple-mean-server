var db = require("../models");

module.exports = function(app) {
	app.get('/car', (req, res) => {
		db.Car.find((err, car) => {
			if(err){
				throw err;
			}
			res.json(car);
		}).limit(1000);
	});
}