// requires
// ======================== //

// framework
const express = require('express')
const app = express()

// config
const config = require('./config/configure.js')(app)     // init configuration

// middleware
const corsBypass = require('./middleware/api/cors_bypass.js')

// routes
var index = require('./routes/index')
var users = require('./routes/users')
const apiRoutes = require('./routes/api.js')

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

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Foundadadadadada');
  err.status = 404;
  next(err);
});
*/

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(3000, () => console.log('Example app listening on port 3000'))



module.exports = app;
