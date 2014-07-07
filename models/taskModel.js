var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Task = new Schema({
	tid : String,
	content : String,
	bTime : Date
});

module.exports = mongoose.model('Task', Task);