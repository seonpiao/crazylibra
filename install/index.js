var Mongo = require('../libs/server/mongodb.js');
var fs = require('fs');
var cp = require('child_process');
var co = require('co');
var thunkify = require('thunkify');
var koa = require('koa');
var path = require('path');
var routing = require('koa-routing');
var views = require('koa-views');
var body = require('koa-body');

var isInstalled = fs.existsSync('.installed');

if (!isInstalled) {
  var app = koa();

  app.use(views(path.join(__dirname, 'views'), {
    default: 'jade',
    cache: process.env.NODE_ENV === 'production' ? true : false
  }));

  //parse body
  app.use(body());

  //routing
  app.use(routing(app));

  app.route('/install').get(function*(next) {
    yield this.render('install');
  }).post(function*() {

  });

  app.listen(7777);
}