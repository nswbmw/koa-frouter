## koa-frouter

File/Folder as `path`, another router middleware for koa.

### Install

    npm i koa-frouter --save

### Example

** File tree **

```
├── app.js
├── package.json
├── ...
└── router
    ├── users
    │   └── *
    │       └── *.js
    ├── posts
    │   ├── month
    │   │   └── *id.js
    │   ├── week
    │   │   └── *id.js
    │   └── day
    │       └── *id.js
    └── links.js
```

** *.js **

```
exports.post = function* (uid, id) { ... }
```

** *id.js **

```
exports.get = function* (id) { ... }
```

** links.js **

```
exports.get = function* () { ... }
```

** app.js **

```
var koa = require('koa');
var router = require('koa-frouter')('router');

var app = koa();
router(app);
app.listen(3000);
```
equal to:

```
var koa = require('koa');
var _ = require('koa-route');

var users = require('./router/users/*/*.js');
var month = require('./router/posts/month/*id.js');
var week = require('./router/posts/week/*id.js');
var day = require('./router/posts/day/*id.js');
var links = require('./router/links.js');

var app = koa();

app.use(_.post('/users/:uid/:id', users.post));
app.use(_.get('/posts/month/:id', month.get));
app.use(_.get('/posts/week/:id', week.get));
app.use(_.get('/posts/day/:id', day.get));
app.use(_.get('/links', links.get));

app.listen(3000);
```

### License

MIT