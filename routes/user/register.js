const express = require('express')
const router = express.Router()
const db = require('../../models/db')
const { sha512 } = require('../../helpers/util')
const serverSalt = process.env.SERVER_SALT
const passport = require('passport')

const {check, validationResult} = require('express-validator/check')
const {matchedData, sanitize} = require('express-validator/filter')

router.post('/', function (req, res, next) {
    passport.authenticate('local-signup', function(err) {
        if (err)
            return res.status(400).send({ error: err })
        return res.sendStatus(200)
    })(req, res, next)
})

module.exports = router