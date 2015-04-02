module.exports = function (data, options) {

  var req = this.req;
  var res = this.res;
  var oars = req._oars;

  res.status(403);

  if (oars !== undefined) {
    oars.log.error('Sending 403 ("Forbidden") response: \n',data);
  } else {
    oars.log.error('Sending 403 ("Forbidden") response');
  }

  res.send(data || {});
};

