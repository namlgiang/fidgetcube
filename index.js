var express = require('express')
var app = express()

'use strict';

require('letsencrypt-express').create({

  server: 'staging'

, email: 'namlgiang@gmail.com'

, agreeTos: true

, approveDomains: [ 'getmyfidgetcube.com' ]

, app: app.use(express.static('public'))

}).listen(80, 443);
