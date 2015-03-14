exports.get = function* () {
    this.body = 'This is links' + '\npathRegexp: ' + exports.get.pathRegexp;
}