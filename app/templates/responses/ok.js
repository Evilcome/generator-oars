/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok(data);
 *
 * @param  {Object} data
 */

module.exports = function (data) {

  var req = this.req;
  var res = this.res;
  var oars = req._oars;

  oars.log.silly('res.ok() :: Sending 200 ("OK") response');

  res.status(200);
  res.send(data || {});
};
