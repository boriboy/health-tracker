const response = require('./response')

module.exports = (err, req, res, next) => {
	// set locals, only providing error
	res.locals.error = err;

    // send customized json app response
    response(res, {}, err)
}