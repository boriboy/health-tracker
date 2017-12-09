const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');
var index = require('./routes/index');
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//app.get('/socket.io', )
app.use('/users', users);

// cors middleware
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'null')
	res.setHeader('Access-Control-Allow-Credentials', true);
	next()
})
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Foundadadadadada');
  err.status = 404;
  next(err);
});
*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))



module.exports = app;
