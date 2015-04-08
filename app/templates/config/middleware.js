// restify ships with several handlers you can use, specifically:

// Accept header parsing
// Authorization header parsing
// CORS handling plugin
// Date header parsing
// JSONP support
// Gzip Response
// Query string parsing
// Body parsing (JSON/URL-encoded/multipart form)
// Static file serving
// Throttling
// Conditional request handling
// Audit logger

module.exports.middleware = {

  /***************************************************************************
  *                                                                          *
  * The order in which middleware should be run for HTTP request. (the Sails *
  * router is invoked by the "router" middleware below.)                     *
  *                                                                          *
  ***************************************************************************/

  order: [
    'acceptParser',
    'queryParser',
    'bodyParser',
    'CORS',
    'myRequestLogger'
  ],

  /****************************************************************************
  *                                                                           *
  * Example custom middleware; logs each request to the console.              *
  *                                                                           *
  ****************************************************************************/

  myRequestLogger: function (req, res, next) {
    console.log("Requested :: ", req.method, req.url);
    return next();
  }
};
