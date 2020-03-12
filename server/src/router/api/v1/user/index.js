const router = require('express').Router()

router.use('/activities', require('./activities'))

router.use('/categories', require('./categories'))

router.use('/dashboard', require('./dashboard'))

module.exports = router
