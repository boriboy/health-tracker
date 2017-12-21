const express = require('express')
const router = express.Router()
const secret = 'b4lJH3bl3lF732azADV780Asg256bhg567'

// middleware 
router.use((req, res, next) => {
    if (!req.query.hasOwnProperty('secret') || req.query.secret != secret) {
        // disregard request
        let err = new Error('Invalid access api key')
        next(err)
    }

    next()
})

// routes
router.get('/ping', (req, res) => {
    res.send('pong')
})

// router.get

module.exports = router;