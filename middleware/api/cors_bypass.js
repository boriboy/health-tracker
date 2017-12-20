// allow all origins to enter api routes
module.exports = (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Credentials', true)
    next()
}

