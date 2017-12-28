const config = require('../config.js')

module.exports = {
    // database configuration 
    db: 'mongodb://localhost/local',

    // initiate application
    init: app => {
        app.set('x-powered-by', false)
        app.set('env', config.env)
        app.set('port', 3000)
    }
}


