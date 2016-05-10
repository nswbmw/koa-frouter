exports.get = function* (id) {
  this.body = 'Day id: ' + id + '\npathRegexp: ' + exports.get.pathRegexp;
};