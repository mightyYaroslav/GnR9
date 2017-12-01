const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/albums', require('./albums'))
router.use('/user', require('./user'))
router.use('/profiles', require('./profiles'))

router.get('/*', (req, res) => {
    res.sendFile(path.resolve(__basedir, 'client', 'build', 'index.html'))
})

module.exports = router