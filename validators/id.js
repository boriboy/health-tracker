module.exports = (req, res, next) => {
    if (!req.hasOwnProperty('id')) {
        next(new Error('missing id param'))
    }

    next()
}