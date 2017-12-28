const express = require('express')
const router = express.Router()
const secret = 'b4lJH3bl3lF732azADV780Asg256bhg567'

// load controllers
const medsController = require('../controllers/meds')

// middleware
const corsBypassMiddleware = require('../middleware/api/cors_bypass')

// load validators
// const idValidator = require('../validators/id')

// api routes password protection middleware 
router.use((req, res, next) => {
    if (!req.query.hasOwnProperty('secret') || req.query.secret != secret) {
        // disregard request
        return next(new Error('Invalid api access key'))
    }
    next()
})

// cors bypass middleware for REST routes
router.use(corsBypassMiddleware)

// routes
router.get('/ping', (req, res) => {
    res.send('pong')
})

// med crud
router.route('/med/:id?')
    .get(medsController.get)
    .post(medsController.create)
    .put(medsController.update)
    .delete(medsController.delete)

module.exports = router;