var oars = require('oars');

var server = oars.createServer({ name: 'My APP' });

server.get('/', function(req, res, next) {
	res.send({ foo: 'bar' });
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('%s listening at port %d.', server.name, port);
});