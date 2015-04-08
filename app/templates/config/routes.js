//Accept-Version

module.exports.routes = {

  'get /': { controller: 'HomeController.sayHello', version: '0.0.1' },
  'get /': { controller: 'HomeController.sayHelloWorld' }
};
