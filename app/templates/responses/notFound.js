module.exports = function (data, options) {

  var req = this.req;
  var res = this.res;
  var oars = req._oars;

  res.status(404);

  if (oars !== undefined) {
    oars.log.error('Sending 404 ("Not Found") response: \n',data);
  } else {
    oars.log.error('Sending 404 ("Not Found") response');
  }

  res.send(data || {});
};

