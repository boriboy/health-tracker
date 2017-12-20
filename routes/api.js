const express = require('express')
const router = express.Router()

// routes
router.get('/ping', (req, res) => {
    res.send('pong')
})

// router.get

module.exports = router;