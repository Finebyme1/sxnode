var mongoose = require('mongoose');
var Task = require('../models/taskModel');

module.exports.controller = function(app) {

	app.get('/', function(req, res){
		Task.find().sort('bTime').exec(function(err, tasks) {
			res.render('index', {
				title : "Express Task",
				tasks : tasks
			});
		});
	});

	app.post('/create', function(req, res) {
		new Task ({
			content : req.body.content,
			bTime : Date.now()
		}).save(function(err, task, count) {
			res.redirect('/');
		});
	});

	app.get('/destroy/:id', function(req, res) {
		Task.findById(req.params.id, function(err, task) {
			task.remove(function(err, task) {
				res.redirect('/');
			});
		});
	});

	app.get('/edit/:id', function(req, res) {
		Task.find().sort('bTime').exec(function(err, tasks) {
			res.render('edit', {
				title :  'Express Task',
				tasks : tasks,
				current : req.params.id
			});
		});
	});

	app.post('/update/:id', function(req, res) {
		Task.findById(req.params.id, function(err, task) {
			task.content = req.body.content;
			task.bTime = Date.now();
			task.save(function(err, task, count) {
				res.redirect('/');
			});
		});
	});
	
};