// framework
const express = require('express')
const app = express()

// config
const config = require('./config/configure')(app)     // init configuration

// middleware
const corsBypass = require('./middleware/api/cors_bypass')
const errorHandler = require('./handlers/errors')

// routes
const index = require('./routes/index')
const users = require('./routes/users')
const apiRoutes = require('./routes/api.js')

// handlers
const responseHandler = require('./handlers/response')

// misc
const path = require('path')

// ======================== //

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// activate middleware chain
app.use(express.static(path.join(__dirname, 'public')))

// bypass origin check for api routes
app.use('/api', corsBypass, apiRoutes)

// todo: serve some static webpage
app.use('/', index)

// error & response handler
app.use(errorHandler, responseHandler);

app.listen(3000, () => console.log('Example app listening on port 3000'))

module.exports = app;
