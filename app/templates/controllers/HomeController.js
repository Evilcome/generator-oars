module.exports = {

	sayHello: function(req, res) {

		async.parallel({
			
			say: function(done) {
				oars.log.info('say');
				done();
			},

			hello: function(done) {
				oars.log.info('hello');
				done();
			}
		}, function(err, results) {
			if(err) return res.serverError(err);

			res.send({ say: 'hello.' });
		});
	},

	sayHelloWorld: function(req, res) {
		async.parallel({
			
			say: function(done) {
				oars.log.info('say');
				done();
			},

			hello: function(done) {
				oars.log.info('hello');
				done();
			},

			world: function(done) {
				oars.log.info('world');
				done();
			}
		}, function(err, results) {
			if(err) return res.serverError(err);

			res.send({ say: 'hello world.' });
		});
	},

	sayHi: function(req, res) {
		res.send({ say: 'hi' });
	}

};