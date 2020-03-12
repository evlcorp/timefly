const router = require('express').Router()

router.use('/timeline', require('./timeline'))

module.exports = router
