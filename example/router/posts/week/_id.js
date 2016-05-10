exports.get = function* (id) {
  this.body = 'Week id: ' + id + '\npathRegexp: ' + exports.get.pathRegexp;
};

exports.week = function* (id) {
  this.body = 'Week id: ' + id + '\npathRegexp: ' + exports.get.pathRegexp;
};