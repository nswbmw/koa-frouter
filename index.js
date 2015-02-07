var path = require('path');
var ls = require('ls-sync');
var route = require('koa-route');

module.exports = frouter;

function frouter(dir) {
  if (!dir) throw new Error('You must specify a route path.');
  return function (app) {
    ls(dir).forEach(function (file) {
      var exportFuns = require(path.join(process.cwd(), file));
      var url = file.replace(path.normalize(dir), '').replace(/\\/g, '/').replace(/\/\*/g, '/:_').split('.')[0];
      Object.keys(exportFuns).forEach(function (method) {
        try {
          app.use(route[method.toLowerCase()](url, exportFuns[method]));
        } catch (e) {}
      });
    });
  };
};