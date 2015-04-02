
module.exports.routes = {

  'get /': { controller: 'HomeController.sayHello', version: '1.1.1' }
  'get /': { controller: 'HomeController.sayHelloWorld', version: ['2.0.0', '2.1.0'] }
};
