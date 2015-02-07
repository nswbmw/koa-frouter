var koa = require('koa');
var router = require('..')('router');

var app = koa();

router(app);

app.listen(3000, function () {
    console.log('Listening on 3000!');
});