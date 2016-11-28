var express = require('express')
var app = express()

require('letsencrypt-express').create({

  server: 'staging'

, email: 'john.doe@example.com'

, agreeTos: true

, approveDomains: [ 'example.com' ]

, app: app.use(express.static('public'))

}).listen(80, 443);
