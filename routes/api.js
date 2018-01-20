const express = require('express')
const router = express.Router()
const secret = 'b4lJH3bl3lF732azADV780Asg256bhg567'

// load controllers
const medsController = require('../controllers/meds')

// cors bypass middleware for REST routes
router.use(require('../middleware/api/cors_bypass'))

// api routes password protection middleware 
// router.use((req, res, next) => {
//     if(req.method === 'POST' || req.method === 'GET') {
//         if (req.body.secret != secret) 
//             return next(new Error('Invalid api access key'))

//         if (!req.query.hasOwnProperty('secret') || req.query.secret != secret)
//             return next(new Error('Invalid api access key'))
//     }

//     next()
// })

// routes
router.get('/ping', (req, res) => {
    res.send('pong')
})

// med CRUD
router.route('/med/:id?')
    .get(medsController.medication.get)
    .post(medsController.medication.create)
    .put(medsController.medication.update)
    .delete(medsController.medication.delete)

// medication intake CRUD
router.route('/med/take/:id/:date?')
    .put(medsController.intake.take)

module.exports = router;