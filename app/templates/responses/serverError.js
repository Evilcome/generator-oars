module.exports = function (data, options) {

  var req = this.req;
  var res = this.res;
  var oars = req._oars;

  res.status(500);

  if (oars !== undefined) {
    oars.log.error('Sending 500 ("Server Error") response: \n',data);
  } else {
    oars.log.error('Sending empty 500 ("Server Error") response');
  }

  res.send(data || {});
};

