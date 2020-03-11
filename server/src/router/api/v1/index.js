const router = require('express').Router()

router.use('/public', require('./public'))
router.use('/user', require('./user'))

module.exports = router
