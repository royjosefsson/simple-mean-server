const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
	name: String,
	_createDate:{ type: Date, default: Date.now }
});
module.exports = mongoose.model('car', carSchema);