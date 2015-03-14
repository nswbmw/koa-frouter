var koa = require('koa');
var router = require('..');

var app = koa();

app.use(router(app, {
  root: './example/router'
}));

app.listen(3000, function () {
    console.log('Listening on 3000!');
});