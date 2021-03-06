// framework
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

// config
const config = require('./config/configure')
config.init(app)

// files
const fs = require('fs');

// bootstrap middleware
const errorHandler = require('./handlers/errors')

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

// bootstrap routes
const index = require('./routes/index')
const users = require('./routes/users')
const apiRoutes = require('./routes/api')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes
app.use('/api', apiRoutes)
app.use('/', express.static(path.join(__dirname, 'portfolio')))

// error handler
app.use(errorHandler);

connect()
	.on('error', console.log)
	.on('disconnected', connect)
	.once('open', listen);

function listen () {
	let port = process.env.PORT || 3000
	app.listen(port, () => {
		console.log('PocketCare server listening on port ' + port)
})}

// database connection
function connect () {
	var options = { server: { socketOptions: { keepAlive: 1 } } }
	return mongoose.connect(process.env.MONGODB_URI, options).connection
  }

module.exports = app;