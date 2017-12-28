// framework
const express = require('express')
const app = express()

// config
const config = require('./config/configure')(app)     // init configuration

// files
const fs = require('fs');

// ----- [bootstrap] ----- //

// bootstrap middleware
const globalMiddleware = require('./middleware/global')
const errorHandler = require('./handlers/errors')

// bootstrap routes
const index = require('./routes/index')
const users = require('./routes/users')
const apiRoutes = require('./routes/api')

// bootstrap handlers

// misc
const path = require('path')

// bootstrap models
const models = path.join(__dirname, 'models');

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(path.join(models, file)));

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// activate middleware chain
app.use(express.static(path.join(__dirname, 'public')))

// bypass origin check for api routes
app.use('/api', globalMiddleware, apiRoutes)

// todo: serve some static webpage
app.use('/', globalMiddleware, index)

// error & response handler
app.use(errorHandler);

app.listen(3000, (err) => console.log('Example app listening on port 3000'))

module.exports = app;
