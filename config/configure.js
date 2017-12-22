const config = require('../config.js')

module.exports = (app) => {
    app.set('x-powered-by', false)
    app.set('env', config.env)
    app.set('port', 3000)
}

