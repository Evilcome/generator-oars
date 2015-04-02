module.exports = function (data, options) {

  var req = this.req;
  var res = this.res;
  var oars = req._oars;

  res.status(400);

  if (oars !== undefined) {
    oars.log.error('Sending 400 ("Bad Request") response: \n',data);
  } else {
    oars.log.error('Sending 400 ("Bad Request") response');
  }

  res.send(data || {});
};

