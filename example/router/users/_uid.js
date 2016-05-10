exports.get = function* (uid, next) {
  this.body = 'Users id: ' + uid + '\npathRegexp: ' + exports.post.pathRegexp;
  yield* next;
};

exports.post = function* (uid) {
  this.body = 'Users id: ' + uid + '\npathRegexp: ' + exports.post.pathRegexp;
};