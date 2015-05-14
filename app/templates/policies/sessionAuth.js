/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 *
 */
var session = require('../../libs/session');

module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller.
  if (req.session.authenticated) {
    return next();
  }

  // clean the sid, fix too much sid problem.
  if (req.session.sid) {
  	session.destroy(req.session.sid, function(err) {
  		next.ifError(err);

  		next();
  	})
  }

  // User is not allowed
  next(new restify.errors.UnauthorizedError());
};
