const router = require('express').Router()

router.use('/activities', require('./activities'))
router.use('/categories', require('./categories'))
router.use('/dashboards', require('./dashboards'))

module.exports = router
