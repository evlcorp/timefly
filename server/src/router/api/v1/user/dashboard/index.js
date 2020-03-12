const router = require('express').Router()

router.use('/timeline', require('./timeline'))
router.use('/charts', require('./charts'))

module.exports = router
