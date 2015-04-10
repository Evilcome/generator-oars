//Accept-Version

module.exports.routes = {

  'get /': [
  	{ controller: 'HomeController.sayHello', version: '1.1.1' },
  	{ controller: 'HomeController.sayHelloWorld' }
  ],
  'get /hi': { controller: 'HomeController.sayHi' }
};