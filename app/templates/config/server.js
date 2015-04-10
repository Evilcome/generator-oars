
module.exports.server = {

	// this will set the restify server's timeout
	timeout: 10000,
	
	// config will be passed into restify.createServer
	// for more infomation: http://restifyjs.com/#creating-a-server 
	attributes: {
		name: 'An Oars Server',
		version: '1.0.0'
	}
};
