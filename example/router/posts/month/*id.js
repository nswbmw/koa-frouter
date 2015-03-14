exports.get = function* (id) {
  this.body = 'Month id: ' + id + '\npathRegexp: ' + exports.get.pathRegexp;
};