// prepare global request local data object
module.exports = (req, res, next) => {
    res.locals = {data:{}}
    next()
}