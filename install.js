var Mongo = require('./libs/server/mongodb.js');
var fs = require('fs');

module.exports = function(app) {

  var isInstalled = fs.existsSync('.installed');

  if (!isInstalled) {
    app.route('/install').get(function() {

    }).post(function() {

    });
  }
};