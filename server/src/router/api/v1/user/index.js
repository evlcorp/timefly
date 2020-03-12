const router = require('express').Router()
const { checkDashboard } = require('../../../../middleware')

router.use('/activities', require('./activities'))

router.use('/categories', require('./categories'))

router.use('/dashboard', checkDashboard, require('./dashboard'))

module.exports = router
