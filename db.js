var mongoose = require('mongoose'),
	  Schema = mongoose.Schema,
	  ObjectId = Schema.ObjectId,
	  Task = require('./models/taskModel');

mongoose.connect('mongodb://localhost/sxnode');