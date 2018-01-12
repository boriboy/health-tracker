const express = require('express')
const router = express.Router()
const secret = 'b4lJH3bl3lF732azADV780Asg256bhg567'

// load controllers
const medsController = require('../controllers/meds')

// cors bypass middleware for REST routes
router.use(require('../middleware/api/cors_bypass'))

// api routes password protection middleware 
router.use((req, res, next) => {
    switch (req.method) {
        case 'POST':
            if (req.body.secret != secret) {
                return next(new Error('Invalid api access key'))
            }
            break;

        
        case 'GET':
            if (!req.query.hasOwnProperty('secret') || req.query.secret != secret) {
                return next(new Error('Invalid api access key'))
            }
            break;

        default:
            next()
            break;
    }

    next()
})

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